import { FormLabel, Textarea } from "@chakra-ui/react";
import React from "react";

type Props = {
  body: string;
  setBody: React.Dispatch<React.SetStateAction<string>>;
};

const Body = ({ body, setBody }: Props) => {
  return (
    <>
      <FormLabel mt="4">Body:</FormLabel>
      <Textarea
        placeholder="email body (optional)"
        value={body}
        onChange={(e) => setBody(e.currentTarget.value)}
      />
    </>
  );
};

export default Body;
