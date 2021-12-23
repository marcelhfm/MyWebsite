import { Box, Flex } from "@chakra-ui/react";
import { IndexPane } from "../components/IndexPane";
import NavBar from "../components/NavBar";
import { Pane } from "../components/Pane";

const Index = () => {
  return (
    <>
      <Box mt={8}>
        <IndexPane />
        <Pane title="Test" desc="Second pane" titleSize="2xl" />
      </Box>
    </>
  );
};

export default Index;
