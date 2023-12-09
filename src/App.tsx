import React, { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  useColorMode,
  Text,
  Code,
  FormLabel,
  Tag,
  useClipboard,
} from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const {
    onCopy: onLinkCopy,
    value: linkValue,
    setValue: setLinkValue,
    hasCopied: linkHasCopied,
  } = useClipboard("");
  const {
    onCopy: onHtmlCopy,
    value: HtmlValue,
    setValue: setHtmlValue,
    hasCopied: htmlHasCopied,
  } = useClipboard("");
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const clearForm = (): void => {
    setTo("");
    setCc("");
    setBcc("");
    setSubject("");
    setBody("");
    setLinkValue("");
    setHtmlValue("");
  };

  const generateLink = (): void => {
    let link = `mailto:${to.replaceAll(" ", "")}?`;
    if (cc) {
      link += `cc=${cc.replaceAll(" ", "")}&`;
    }
    if (bcc) {
      link += `bcc=${bcc.replaceAll(" ", "")}&`;
    }
    if (subject) {
      link += `subject=${encodeURI(subject)}&`;
    }
    if (body) {
      link += `body=${encodeURI(body)}`;
    }
    // remove the last character if it's an ampersand or question mark
    if (link[link.length - 1] === "&" || link[link.length - 1] === "?") {
      link = link.slice(0, -1);
    }
    setLinkValue(link);
    setHtmlValue(`<a href="${link}">Send me an email</a>`);
  };
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
        <Flex justifyContent="space-between">
          <Button
            colorScheme="yellow"
            onClick={() => {
              // open the link in a new tab
              window.open("https://www.buymeacoffee.com/suarezluis");
            }}
          >
            Buy me coffee ☕
          </Button>

          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Flex>
        <Flex justifyContent="center">
          <Heading as="h1" size="xl" marginY="4">
            Mailto Link Generator
          </Heading>
        </Flex>
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
          <InputGroup mb="4">
            <InputLeftAddon width="60px" children="to:" />
            <Input
              type="email"
              placeholder="comma separated email addresses (required)"
              value={to}
              onChange={(e) => setTo(e.currentTarget.value)}
            />
          </InputGroup>
          <InputGroup mb="4">
            <InputLeftAddon width="60px" children="cc:" />
            <Input
              type="text"
              placeholder="comma separated email addresses (optional)"
              value={cc}
              onChange={(e) => setCc(e.currentTarget.value)}
            />
          </InputGroup>
          <InputGroup mb="4">
            <InputLeftAddon width="60px" children="bcc:" />
            <Input
              type="text"
              placeholder="comma separated email addresses (optional)"
              value={bcc}
              onChange={(e) => setBcc(e.currentTarget.value)}
            />
          </InputGroup>
          <FormLabel>Subject:</FormLabel>
          <Input
            placeholder="subject line (optional)"
            value={subject}
            onChange={(e) => setSubject(e.currentTarget.value)}
          />
          <FormLabel mt="4">Body:</FormLabel>
          <Textarea
            placeholder="email body (optional)"
            value={body}
            onChange={(e) => setBody(e.currentTarget.value)}
          />
        </Flex>
        <Box paddingX="10">
          <Flex justifyContent="space-evenly">
            <Button onClick={clearForm}>Clear</Button>
            <Button onClick={generateLink}>Generate</Button>
          </Flex>

          {linkValue && (
            <Flex mb="4" alignItems="center" flexDirection="column">
              <Box>
                <Button
                  onClick={() => {
                    if (linkValue) {
                      window.location = linkValue as unknown as Location;
                    }
                  }}
                >
                  Test your link
                </Button>
              </Box>
              <Flex flexDirection="column" maxWidth="75%">
                <Flex justifyContent="space-between" paddingY="4">
                  <Tag>Link</Tag>
                  <Button size="xs" onClick={onLinkCopy}>
                    {linkHasCopied ? "Copied!" : "Copy"}
                  </Button>
                </Flex>
                <Code padding="4" variant="subtle" colorScheme="green">
                  {linkValue}
                </Code>
                <Flex justifyContent="space-between" paddingY="4">
                  <Tag>HTML</Tag>
                  <Button size="xs" onClick={onHtmlCopy}>
                    {htmlHasCopied ? "Copied!" : "Copy"}
                  </Button>
                </Flex>
                <Code padding="4" variant="subtle" colorScheme="blue">
                  {HtmlValue}
                </Code>
              </Flex>
            </Flex>
          )}
        </Box>
        <Box marginTop="5" paddingBottom="20">
          <Text textAlign="justify">
            This tool was created by{" "}
            <Button
              variant="link"
              onClick={() => {
                // open the link in a new tab
                window.open("https://suarezluis.com");
              }}
            >
              Luis Suarez
            </Button>
            , it is provided free of charge and without warranty. If you find it
            useful, please consider{" "}
            <Button
              variant="link"
              onClick={() => {
                // open the link in a new tab
                window.open("https://www.buymeacoffee.com/suarezluis");
              }}
            >
              buying me a coffee
            </Button>
            . If you have any questions, comments, or suggestions, please{" "}
            <Button
              variant="link"
              onClick={() => {
                // open the link in a new tab
                window.open("https://x.com/suarezluis");
              }}
            >
              reach out to me on X (formerly Twitter)
            </Button>
            .
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;

//q: Describe what a mailto link is
//a: A mailto link is a link that opens the user's default email client and pre-populates the email with the information you provide in the link.
