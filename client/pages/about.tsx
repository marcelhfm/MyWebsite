import Head from "next/head";
import { Pane } from "../components/Pane";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <Pane>
          <h1 className="text-4xl p-10">Work in Progress | Coming Soon...</h1>
        </Pane>
      </div>
    </div>
  );
};

export default About;
