import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  text: string;
  maxChars: number;
}

const ExpandableText = ({ text, maxChars }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded ? text : text.substring(0, maxChars) + "...";

  if (text.length <= maxChars) return <Text> {text}</Text>;
  return (
    <>
      <Text>
        {displayText}
        <Button
          size="xs"
          marginLeft={1}
          colorScheme="yellow"
          fontWeight="bold"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
