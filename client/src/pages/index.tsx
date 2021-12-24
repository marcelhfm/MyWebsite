import { Avatar, Box, Flex, WrapItem, Text, Heading } from "@chakra-ui/react";
import { CvTable } from "../components/CvTable";
import { Pane } from "../components/Pane";

const Index = () => {
  return (
    <>
      <Box mt={8}>
        <Pane title="Hey, I'm Marcel!">
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
        </Pane>
        <Pane title="curriculum vitae">
          <Heading fontSize="xl">Education</Heading>
          <CvTable />
        </Pane>
      </Box>
    </>
  );
};

export default Index;
