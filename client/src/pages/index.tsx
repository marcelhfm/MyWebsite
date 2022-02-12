import Head from "next/head";
import { Pane } from "../components/Pane";
import { server } from "../config/url";
import prisma from "../lib/prisma";

export const getServerSideProps = async () => {
  const viewCount = await prisma.viewCount.findFirst({
    where: {
      id: 1,
    },
  });

  return { props: { viewCount } };
};

async function updateCounter(counter) {
  const response = await fetch(`${server}/api/counter`, {
    method: "POST",
    body: counter,
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

const IndexPage = ({ viewCount }) => {
  let counter = viewCount.counter;
  let updatedCounter = counter + 1;
  updateCounter(parseInt(updatedCounter));

  return (
    <div>
      <Head>
        <title>Home | Marcel Hofmann</title>
      </Head>
      <div>
        <Pane>
          <div className="grid gap-4 p-4 md:grid-cols-4">
            <h1 className="text-4xl font-bold text-orange-300 md:col-span-4">
              Hi I'm Marcel!
            </h1>
            {/* <img
            src="/placeholder.jpg"
            className="md:col-span-1 md:self-center"
          ></img> */}
            <p className="text-lg md:col-span-4">
              {/* col-span-3 wenn Img */}
              I'm a Student and Hobbydeveloper living in Munich. I am currently
              full-time studying business informatics at the Hochschule für
              angewandte Wissenschaften München. In my spare time I'm trying to
              improve my programming skills, with smaller projects such as this
              website.
            </p>
          </div>
        </Pane>
      </div>
      <div className="mt-14">
        <Pane>
          <div className="w-full">
            <h1 className="p-3 text-3xl font-bold text-orange-300">
              curriculum vitae
            </h1>
            <h3 className="px-3 text-xl font-bold text-orange-200">
              Education
            </h3>
            <div className="grid w-full grid-cols-4 gap-x-10 p-3">
              <p className="col-span-1 text-right">
                <em>Period</em>
              </p>
              <p className="col-span-3">09/2012 - 07/2020</p>
              <p className="col-span-1 text-right">
                <em>Highschool</em>
              </p>
              <p className="col-span-3">Josef-Effner-Gymnasium Dachau</p>
              <p className="col-span-1 text-right">
                <em>Final Grade</em>
              </p>
              <p className="col-span-3">1.8</p>
              <hr className="col-span-4 mt-1 border-black/20" />
              <p className="col-span-1 mt-2 text-right">
                <em>Period</em>
              </p>
              <p className="col-span-3 mt-2">10/2020 - 10/2024</p>
              <p className="col-span-1 text-right">
                <em>University</em>
              </p>
              <p className="col-span-3">
                Hochschule für angewandte Wissenschaften München
              </p>
              <p className="col-span-1 text-right">
                <em>Course of study</em>
              </p>
              <p className="col-span-3">Business informatics</p>
            </div>
            <h3 className="px-3 text-xl font-bold text-orange-200">
              Work Experience
            </h3>
            <div className="grid w-full grid-cols-4 gap-x-10 p-3">
              <p className="col-span-1 text-right">
                <em>Period</em>
              </p>
              <p className="col-span-3">03/07/2017 - 07/07/2017</p>
              <p className="col-span-1 text-right">
                <em>Position</em>
              </p>
              <p className="col-span-3">Internship</p>
              <p className="col-span-1 text-right">
                <em>Company</em>
              </p>
              <p className="col-span-3">
                Fraunhofer-Institut für Angewandte und Integrierte Sicherheit
                AISEC
              </p>
              <hr className="col-span-4 mt-1 border-black/20" />
              <p className="col-span-1 mt-2 text-right">
                <em>Period</em>
              </p>
              <p className="col-span-3 mt-2">01/10/2020 - 01/10/2021</p>
              <p className="col-span-1 text-right">
                <em>Position</em>
              </p>
              <p className="col-span-3">Working student in food retailing</p>
              <p className="col-span-1 text-right">
                <em>Company</em>
              </p>
              <p className="col-span-3">Lidl Vertriebs- GmbH & Co. KG</p>
              <hr className="col-span-4 mt-1 border-black/20" />
              <p className="col-span-1 mt-2 text-right">
                <em>Period</em>
              </p>
              <p className="col-span-3 mt-2">17/09/2021 - 17/09/2022</p>
              <p className="col-span-1 text-right">
                <em>Position</em>
              </p>
              <p className="col-span-3">
                Working student in project management for digital projects
              </p>
              <p className="col-span-1 text-right">
                <em>Company</em>
              </p>
              <p className="col-span-3">Siemens Betriebskrankenkasse</p>
            </div>
          </div>
        </Pane>
      </div>
      <div>
        <Pane>
          <div className="w-full p-2 text-center font-light">
            This page has been viewed{" "}
            <span className="rounded bg-orange-300 px-2 py-1 font-bold text-black shadow-lg">
              {viewCount.counter}
            </span>{" "}
            times.
          </div>
        </Pane>
      </div>
    </div>
  );
};

export default IndexPage;
