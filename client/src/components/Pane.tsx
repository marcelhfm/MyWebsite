import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface PaneProps {
  title: string;
  desc: string;
  titleSize?: string;
}

export const Pane: React.FC<PaneProps> = ({ title, desc, titleSize }) => {
  const boxColor = useColorModeValue("blue.50", "gray.700");
  return (
    <Box
      bg={boxColor}
      m={"auto"}
      mt="8"
      maxW="800"
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      <Heading fontSize={titleSize ? titleSize : "3xl"}>{title}</Heading>
      <Text fontSize="xl" mt={4}>
        {desc}
      </Text>
    </Box>
  );
};
