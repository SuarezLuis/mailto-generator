import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";

type Props = {
  subject: string;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
};

function Subject({ subject, setSubject }: Props) {
  return (
    <>
      <FormLabel>Subject:</FormLabel>
      <Input
        placeholder="subject line (optional)"
        value={subject}
        onChange={(e) => setSubject(e.currentTarget.value)}
      />
    </>
  );
}

export default Subject;
