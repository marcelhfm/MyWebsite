import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../components/NavBar";

const Projects = () => {
  return (
    <>
      <div>
        <Head>
          <title>Projects | Marcel Hofmann</title>
        </Head>
      </div>
      <Flex>
        <div>Projects</div>
      </Flex>
    </>
  );
};

export default Projects;
