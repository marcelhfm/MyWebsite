import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <>
      <div>
        <Head>
          <title>About | Marcel Hofmann</title>
        </Head>
      </div>
      <Flex>
        <div>About</div>
      </Flex>
    </>
  );
};

export default About;
