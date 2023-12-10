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
  bcc: string;
  setBcc: React.Dispatch<React.SetStateAction<string>>;
  invalidEmails: InvalidEmails;
};

const Bcc = ({ bcc, setBcc, invalidEmails }: Props) => {
  return (
    <FormControl mb="4" isInvalid={!!invalidEmails.bcc.length}>
      <InputGroup mb="4">
        <InputLeftAddon width="60px" children="bcc:" />
        <Input
          type="text"
          placeholder="comma separated email addresses (optional)"
          value={bcc}
          onChange={(e) => setBcc(e.currentTarget.value)}
        />
      </InputGroup>
      {invalidEmails.bcc.map((email, index) => (
        <FormErrorMessage key={`bcc-${email}-${index}`}>
          {email} is not a valid email
        </FormErrorMessage>
      ))}
    </FormControl>
  );
};

export default Bcc;
