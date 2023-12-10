import { Button, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  clearForm: () => void;
  generateLink: () => void;
};

const Actions = ({ clearForm, generateLink }: Props) => {
  return (
    <Flex justifyContent="space-evenly">
      <Button onClick={clearForm}>Clear</Button>
      <Button onClick={generateLink}>Generate</Button>
    </Flex>
  );
};

export default Actions;
