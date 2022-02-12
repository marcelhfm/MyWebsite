import Head from "next/head";
import Link from "../../components/Link";
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
        <div className="w-full">
          <h1 className="text-3xl p-2">All projects</h1>
          <h2 className="text-lg p-2">
            For now, all my projects are embedded into this website. I have
            planned to launch some projects on another website, in order to try
            out other technologies. But this is still in planning.{" "}
          </h2>
          <ul className="md:mx-5 mx-3 p-2 ">
            <li className="shadow-lg bg-orange-100 text-gray-900 rounded-lg hover:bg-orange-200">
              <Link href="/projects/comments">
                {({ isActive }) => (
                  <div>
                    <div className="pt-2 px-2 text-lg font-semibold">
                      Comment Section
                    </div>
                    <p className="px-2">
                      Leave a Comment! Feel free to leave feedback, say hello,
                      or ask questions.
                    </p>
                    <p className="px-2 pb-2">
                      This project is heavily inspired by a Twitter feed, of
                      course a bit less complex.
                    </p>
                  </div>
                )}
              </Link>
            </li>
            <li className="shadow-lg bg-orange-100 text-gray-900 rounded-lg mt-5 mb-5">
              <div>
                <div className="pt-2 px-2 text-lg font-semibold">
                  More Coming Soon!
                </div>
                <p className="px-2">
                  I am always eager to learn more technologies and try out new
                  things.
                </p>
                <p className="px-2 pb-2">
                  There is definetly more coming soon!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Pane>
    </div>
  );
};

export default Overview;
