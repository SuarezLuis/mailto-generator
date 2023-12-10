import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import React from "react";
import { InvalidEmails } from "../App";

type Props = {
  to: string;
  setTo: React.Dispatch<React.SetStateAction<string>>;
  toErrorMessage: string;
  invalidEmails: InvalidEmails;
};

const To = ({ to, setTo, toErrorMessage, invalidEmails }: Props) => {
  return (
    <FormControl
      mb="4"
      isInvalid={!!toErrorMessage || !!invalidEmails.to.length}
    >
      <InputGroup>
        <InputLeftAddon width="60px" children="to:" />
        <Input
          type="email"
          placeholder="comma separated email addresses (required)"
          value={to}
          onChange={(e) => setTo(e.currentTarget.value)}
        />
      </InputGroup>
      <FormErrorMessage>{toErrorMessage}</FormErrorMessage>
      {invalidEmails.to.map((email, index) => (
        <FormErrorMessage key={`to-${email}-${index}`}>
          {email} is not a valid email
        </FormErrorMessage>
      ))}
    </FormControl>
  );
};

export default To;
