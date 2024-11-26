import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandAbleText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;
  if (!children) return null;
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <>
      <Text>
        {summary}
        <Button
          marginLeft={1}
          colorScheme="yellow"
          fontWeight="bold"
          size="xs"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "show less" : "show more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandAbleText;
