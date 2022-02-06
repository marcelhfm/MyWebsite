import Head from "next/head";
import { Pane } from "../components/Pane";

const IndexPage = () => (
  <div>
    <Head>
      <title>Index</title>
    </Head>
    <div>
      <Pane>
        <div>
          <div>
            <h2 className="text-4xl py-3 px-3 font-bold">Hey I'm Marcel!</h2>
          </div>
          <div className="flex px-5 text-xl">
            <div className="">Logo</div>
            <div>
              I'm a Student and Hobbydeveloper living in Munich. I am currently
              full-time studying business informatics at the Hochschule für
              angewandte Wissenschaften München. In my spare time I'm trying to
              improve my programming skills, with smaller projects such as this
              website.
            </div>
          </div>
        </div>
      </Pane>
    </div>
  </div>
);

export default IndexPage;
