import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Box, Flex, Text, useClipboard } from "@chakra-ui/react";
import Subject from "./Components/Subject";
import Link from "./Components/Link";
import Body from "./Components/Body";
import Bcc from "./Components/Bcc";
import Cc from "./Components/Cc";
import To from "./Components/To";
import Header from "./Components/Header";
import Actions from "./Components/Actions";
import Html from "./Components/Html";
import Footer from "./Components/Footer";

export type InvalidEmails = {
  to: string[];
  cc: string[];
  bcc: string[];
};

function App() {
  // Copy link to clipboard
  const {
    onCopy: onLinkCopy,
    value: linkValue,
    setValue: setLinkValue,
    hasCopied: linkHasCopied,
  } = useClipboard("");

  // Copy html to clipboard
  const {
    onCopy: onHtmlCopy,
    value: htmlValue,
    setValue: setHtmlValue,
    hasCopied: htmlHasCopied,
  } = useClipboard("");
  // Form state
  const [to, setTo] = useState("");
  const [toErrorMessage, setToErrorMessage] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  // Email validation object
  const [invalidEmails, setInvalidEmails] = useState<InvalidEmails>({
    to: [],
    cc: [],
    bcc: [],
  });

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate emails
  const validateEmails = (): boolean => {
    const toArray = to.trim().split(",");
    const ccArray = !!cc.trim() ? cc.split(",") : [];
    const bccArray = !!bcc.trim() ? bcc.split(",") : [];

    const invalidToEmails = toArray.filter(
      (email) => !email.trim().match(emailRegex)
    );
    const invalidCcEmails = ccArray.filter(
      (email) => !email.trim().match(emailRegex)
    );
    const invalidBccEmails = bccArray.filter(
      (email) => !email.trim().match(emailRegex)
    );

    setInvalidEmails({
      to: invalidToEmails,
      cc: invalidCcEmails,
      bcc: invalidBccEmails,
    });

    const isValid =
      invalidToEmails.length === 0 &&
      invalidCcEmails.length === 0 &&
      invalidBccEmails.length === 0;

    if (!isValid) {
      clearResults();
      return false;
    }
    return true;
  };

  // Validate form
  const validateForm = (): boolean => {
    if (!to) {
      setToErrorMessage("Please enter at least one recipient");
      clearResults();
      return false;
    }
    setToErrorMessage("");
    return true;
  };

  // Clear form
  const clearForm = (): void => {
    setTo("");
    setCc("");
    setBcc("");
    setSubject("");
    setBody("");
    clearResults();
  };

  // Generate link
  const generateLink = (): void => {
    if (!validateForm() || !validateEmails()) {
      return;
    }
    let link = `mailto:${to.replaceAll(" ", "")}?`;
    if (cc.trim()) {
      link += `cc=${cc.replaceAll(" ", "")}&`;
    }
    if (bcc.trim()) {
      link += `bcc=${bcc.replaceAll(" ", "")}&`;
    }
    if (subject.trim()) {
      link += `subject=${encodeURI(subject)}&`;
    }
    if (body.trim()) {
      link += `body=${encodeURI(body)}`;
    }
    // remove the last character if it's an ampersand or question mark
    if (link[link.length - 1] === "&" || link[link.length - 1] === "?") {
      link = link.slice(0, -1);
    }
    setLinkValue(link);
    setHtmlValue(`<a href="${link}">Send me an email</a>`);
  };

  // Clear results
  const clearResults = useCallback((): void => {
    setLinkValue("");
    setHtmlValue("");
  }, [setHtmlValue, setLinkValue]);

  // Effects

  // Clear results when form values change
  useEffect(() => {
    clearResults();
  }, [to, cc, bcc, subject, body, clearResults]);

  return (
    <Flex
      className="App"
      width="100vw"
      height="100vh"
      padding="4"
      justifyContent="center"
      overflow="scroll"
    >
      <Box maxW="800px">
        <Header />

        <Flex flexDirection="column" paddingY="5">
          <Text as="p" marginY="4">
            This is a simple tool to generate a mailto link for you to use in
            your HTML code. Mailto links are used to open the user's default
            email client and pre-populate the email with the information you
            provide in the link.
          </Text>

          <Text as="p" marginY="4">
            Fill out the form below and click generate to create a mailto link.
          </Text>

          <To
            to={to}
            setTo={setTo}
            toErrorMessage={toErrorMessage}
            invalidEmails={invalidEmails}
          />

          <Cc cc={cc} setCc={setCc} invalidEmails={invalidEmails} />

          <Bcc bcc={bcc} setBcc={setBcc} invalidEmails={invalidEmails} />

          <Subject subject={subject} setSubject={setSubject} />

          <Body body={body} setBody={setBody} />
        </Flex>
        <Actions clearForm={clearForm} generateLink={generateLink} />
        <Link
          linkValue={linkValue}
          linkHasCopied={linkHasCopied}
          onLinkCopy={onLinkCopy}
        />
        <Html
          htmlValue={htmlValue}
          linkValue={linkValue}
          htmlHasCopied={htmlHasCopied}
          onHtmlCopy={onHtmlCopy}
        />

        {linkValue && (
          <Flex mb="4" alignItems="center" flexDirection="column">
            <Flex flexDirection="column" maxWidth="75%"></Flex>
          </Flex>
        )}
        <Footer />
      </Box>
    </Flex>
  );
}

export default App;

//q: Describe what a mailto link is
//a: A mailto link is a link that opens the user's default email client and pre-populates the email with the information you provide in the link.
