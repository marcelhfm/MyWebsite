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
          <h1 className="p-2 text-3xl">All projects</h1>
          <h2 className="p-2 text-lg">
            For now, all my projects are embedded into this website. I have
            planned to launch some projects on another website, in order to try
            out other technologies. But this is still in planning.{" "}
          </h2>
          <ul className="mx-3 p-2 md:mx-5 ">
            <li className="rounded-lg bg-orange-100 text-gray-900 shadow-lg hover:bg-orange-200">
              <Link href="/projects/comments">
                {({ isActive }) => (
                  <div>
                    <div className="px-2 pt-2 text-lg font-semibold">
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
            <li className="mt-5 mb-5 rounded-lg bg-orange-100 text-gray-900 shadow-lg">
              <div>
                <div className="px-2 pt-2 text-lg font-semibold">
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
