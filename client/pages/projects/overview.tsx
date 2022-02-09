import Head from "next/head";
import { Pane } from "../../components/Pane";

const Overview = () => {
  return (
    <div>
      <div>
        <Head>
          <title>Projects | Overview</title>
        </Head>
      </div>
      <Pane>
        <h1 className="text-4xl p-10">Work in Progress | Coming Soon...</h1>
      </Pane>
    </div>
  );
};

export default Overview;
