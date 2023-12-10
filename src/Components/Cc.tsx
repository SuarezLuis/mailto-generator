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
  cc: string;
  setCc: React.Dispatch<React.SetStateAction<string>>;
  invalidEmails: InvalidEmails;
};

const Cc = ({ cc, setCc, invalidEmails }: Props) => {
  return (
    <FormControl mb="4" isInvalid={!!invalidEmails.cc.length}>
      <InputGroup>
        <InputLeftAddon width="60px" children="cc:" />
        <Input
          type="text"
          placeholder="comma separated email addresses (optional)"
          value={cc}
          onChange={(e) => setCc(e.currentTarget.value)}
        />
      </InputGroup>
      {invalidEmails.cc.map((email, index) => (
        <FormErrorMessage key={`cc-${email}-${index}`}>
          {email} is not a valid email
        </FormErrorMessage>
      ))}
    </FormControl>
  );
};

export default Cc;
