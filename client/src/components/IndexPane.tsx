import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Avatar,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

interface IndexPaneProps {}

export const IndexPane: React.FC<IndexPaneProps> = ({}) => {
  const boxColor = useColorModeValue("blue.50", "gray.700");
  return (
    <Box
      //bg={boxColor}
      m={"auto"}
      maxW="800"
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      <Heading fontSize="3xl">Hey I'm Marcel!</Heading>
      <Flex>
        <WrapItem mt="8" mr="4">
          <Avatar src="/Placeholder.jpg" size="2xl" name="Marcel Hofmann" />
        </WrapItem>
        <Text fontSize="xl" mt={4}>
          I'm a Student and Hobbydeveloper living in Munich. I am currently
          full-time studying business informatics at the Hochschule für
          angewandte Wissenschaften München.
          <br />
          In my spare time I'm trying to improve my programming skills, with
          smaller projects such as this website.
        </Text>
      </Flex>
    </Box>
  );
};
