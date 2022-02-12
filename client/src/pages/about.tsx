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
          <div className="ml-5">
            <h1 className="p-2 text-3xl font-bold text-orange-300">
              Technologies
            </h1>
            <ul className="ml-3 list-disc p-2 text-lg md:ml-10">
              <li>Typescript</li>
              <li>NextJS (React Framework)</li>
              <li>TailwindCSS (Styling Framework</li>
              <li>Prisma (ORM)</li>
              <li>Postgresql (Database)</li>
            </ul>

            <h2 className="p-2 text-3xl font-bold text-orange-300">
              Deployment
            </h2>
            <ul className="ml-3 mb-3 list-disc p-2 text-lg md:ml-10">
              <li>
                <em className="font-semibold text-orange-200">Fun fact:</em>{" "}
                This Website didn't cost me anything to deploy!
              </li>
              <li>
                This site is deployed via Vercel. It includes the "backend" by
                using the serverless functions NextJS provides.
              </li>
              <li>
                My Postgresql database is hosted on Heroku. Heroku has a free
                tier, which I can highly recommend for smaller projects, such as
                this one!
              </li>
            </ul>
          </div>
        </Pane>
        <Pane>
          <div className="ml-5">
            <h1 className="p-2 text-3xl font-bold text-orange-300">
              Changelog
            </h1>
            <ul className="text-md ml-3 mb-3 list-disc p-2 md:ml-10">
              <li>12.02.2022 | About site MVP</li>
              <li>
                12.02.2022 | Serverless functions added & addeed ViewCounter on
                Index
              </li>
              <li>09.02.2022 | Coming Soon pages added to empty pages</li>
              <li>08.02.2022 | Contact page MVP</li>
              <li>
                06.02.2022 | Styling Framework has been changed from ChakraUI to
                TailwindCSS
              </li>
              <li>
                23.12.2021 | Index Page Content has been added & Footer has been
                added
              </li>
              <li>22.12.2021 | Page structure and Navigation Bar added</li>
              <li>22.12.2021 | Page has been deployed!</li>
            </ul>
          </div>
        </Pane>
      </div>
    </div>
  );
};

export default About;
