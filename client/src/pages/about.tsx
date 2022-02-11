import Head from "next/head";
import { Pane } from "../components/Pane";

const About = ({ viewCounter }) => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <Pane>
          <h1 className="md:text-4xl p-10 sm:text-2xl text-2xl">
            Work in Progress | Coming Soon...
          </h1>
        </Pane>
      </div>
    </div>
  );
};

export default About;
