import { Button, Code, Flex, Tag } from "@chakra-ui/react";
import React from "react";

type Props = {
  linkValue: string;
  linkHasCopied: boolean;
  onLinkCopy: () => void;
};

const Link = ({ linkValue, linkHasCopied, onLinkCopy }: Props) => {
  return linkValue ? (
    <>
      <Flex justifyContent="space-between" paddingY="4">
        <Tag>Link</Tag>
        <Button size="xs" onClick={onLinkCopy}>
          {linkHasCopied ? "Copied!" : "Copy"}
        </Button>
      </Flex>
      <Code
        padding="4"
        variant="subtle"
        colorScheme="green"
        width="100%"
        maxWidth="90vw"
      >
        {linkValue}
      </Code>
      <Flex justifyContent="flex-end" marginTop="4">
        <Button
          colorScheme="green"
          onClick={() => {
            if (linkValue) {
              window.location = linkValue as unknown as Location;
            }
          }}
        >
          Test link
        </Button>
      </Flex>
    </>
  ) : null;
};

export default Link;
