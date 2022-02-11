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
        <div>
          <h1 className="md:text-4xl p-10 sm:text-2xl text-2xl">
            Work in Progress | Coming Soon...
          </h1>
        </div>
      </Pane>
    </div>
  );
};

export default Overview;
