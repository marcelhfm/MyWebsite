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
  title?: any;
  desc?: string;
  titleSize?: string;
  padding?: string;
  margin?: string;
  descSize?: string;
  bg?: { light: string; dark: string };
  pb?: string;
}

export const Pane: React.FC<PaneProps> = ({
  title,
  desc,
  titleSize,
  children,
  padding,
  margin,
  descSize,
  bg,
  pb,
}) => {
  let boxColor = undefined;
  if (bg) {
    boxColor = useColorModeValue(bg.light, bg.dark);
  } else {
    boxColor = useColorModeValue("white", "gray.700");
  }
  return (
    <Box
      bg={boxColor}
      m={margin ? margin : "auto"}
      mt="8"
      maxW="800"
      p={padding ? padding : "5"}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="xl"
      pb={pb ? pb : ""}
    >
      <Heading fontSize={titleSize ? titleSize : "3xl"}>{title}</Heading>
      {desc ? (
        <Text fontSize={descSize ? descSize : "xl"} mt={4}>
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
