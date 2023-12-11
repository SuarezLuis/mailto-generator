import { Box, Button, Text } from "@chakra-ui/react";

import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box marginTop="5" paddingBottom="40">
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
        , or sponsoring me on{" "}
        <Button
          variant="link"
          onClick={() => {
            // open the link in a new tab
            window.open("https://github.com/sponsors/suarezluis");
          }}
        >
          GitHub
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
  );
};

export default Footer;
