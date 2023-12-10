import { Button, Flex, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
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
      <Flex mt="4" justifyContent={"space-between"}>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=suarezluis&repo=mailto-generator&type=star&count=true&size=large"
          width="170"
          height="30"
          title="GitHub"
        ></iframe>

        <iframe
          src="https://ghbtns.com/github-btn.html?user=suarezluis&type=sponsor&size=large"
          width="206"
          height="30"
          title="GitHub"
        ></iframe>
      </Flex>
    </>
  );
};

export default Header;
