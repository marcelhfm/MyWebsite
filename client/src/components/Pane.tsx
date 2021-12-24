import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface PaneProps {
  title: string;
  desc?: string;
  titleSize?: string;
}

export const Pane: React.FC<PaneProps> = ({
  title,
  desc,
  titleSize,
  children,
}) => {
  const boxColor = useColorModeValue("white", "gray.700");
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
      {desc ? (
        <Text fontSize="xl" mt={4}>
          {desc}
        </Text>
      ) : (
        <Container maxW="container.md" pt={4}>
          {children}
        </Container>
      )}
    </Box>
  );
};
