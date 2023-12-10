import { Button, Code, Flex, Tag } from "@chakra-ui/react";
import React from "react";

type Props = {
  htmlValue: string;
  linkValue: string;
  htmlHasCopied: boolean;
  onHtmlCopy: () => void;
};

const Html = ({ htmlValue, linkValue, htmlHasCopied, onHtmlCopy }: Props) => {
  return htmlValue ? (
    <>
      <Flex justifyContent="space-between" paddingY="4">
        <Tag>HTML</Tag>
        <Button size="xs" onClick={onHtmlCopy}>
          {htmlHasCopied ? "Copied!" : "Copy"}
        </Button>
      </Flex>
      <Code
        padding="4"
        variant="subtle"
        colorScheme="blue"
        width="100%"
        maxWidth="90vw"
      >
        {htmlValue}
      </Code>
      <Flex justifyContent="flex-end" marginTop="4">
        <Button
          variant="link"
          color={"blue"}
          onClick={() => {
            window.open(linkValue, "_blank", "noreferrer");
          }}
        >
          Test HTML
        </Button>
      </Flex>
    </>
  ) : null;
};

export default Html;
