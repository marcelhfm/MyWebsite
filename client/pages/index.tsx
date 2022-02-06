import Head from "next/head";
import { Pane } from "../components/Pane";

const IndexPage = () => (
  <div>
    <Head>
      <title>Index</title>
    </Head>
    <div>
      <Pane>
        <div className="p-4 grid gap-4 md:grid-cols-4">
          <h1 className="text-4xl font-bold md:col-span-4">Hi I'm Marcel!</h1>
          <img
            src="../Public/placeholder.jpg"
            className="object-center md:col-span-1"
          ></img>
          <p className="text-lg md:col-span-3">
            I'm a Student and Hobbydeveloper living in Munich. I am currently
            full-time studying business informatics at the Hochschule für
            angewandte Wissenschaften München. In my spare time I'm trying to
            improve my programming skills, with smaller projects such as this
            website.
          </p>
        </div>
      </Pane>
    </div>
    <div>
      <Pane>
        <div className="w-full">
          <h1 className="text-3xl font-bold p-3">curriculum vitae</h1>
          <h3 className="text-xl font-bold px-3">Education</h3>
          <div className="p-3 w-full grid gap-x-10 grid-cols-4">
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
            <hr className="mt-1 border-black/20 col-span-4" />
            <p className="col-span-1 text-right mt-2">
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
          <h3 className="text-xl font-bold px-3">Work Experience</h3>
          <div className="p-3 w-full grid gap-x-10 grid-cols-4">
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
            <hr className="mt-1 border-black/20 col-span-4" />
            <p className="col-span-1 text-right mt-2">
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
            <hr className="mt-1 border-black/20 col-span-4" />
            <p className="col-span-1 text-right mt-2">
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
        {/* <div className="w-full">
          <h1 className="text-3xl font-bold p-3">curriculum vitae</h1>
          <h3 className="text-xl font-bold px-3">Education</h3>
          <div className="p-3 w-full grid gap-x-10 gap-y-3 grid-cols-4">
            <p className="col-span-1 text-right">
              <em>
                Period <br />
                Highschool <br />
                Final Grade
              </em>
            </p>
            <p className="col-span-3">
              09/2012 - 07/2020 <br />
              Josef-Effner-Gymnasium Dachau <br />
              1.8
            </p>
            <hr className="mt-1 border-black/20 col-span-4" />
            <p className="col-span-1 text-right">
              <em>
                Period <br />
                University <br />
                Course of study
              </em>
            </p>
            <p className="col-span-3">
              10/2020 - 10/2024 <br />
              Hochschule für angewandte Wissenschaften München <br />
              Business informatics
            </p>
          </div>
          <h3 className="text-xl font-bold px-3">Work Experience</h3>
          <div className="p-3 w-full grid gap-x-10 gap-y-3 grid-cols-4">
            <p className="col-span-1 text-right">
              <em>
                Period <br />
                Position <br />
                Company
              </em>
            </p>
            <p className="col-span-3">
              03/07/2017 - 07/07/2017 <br />
              Internship <br />
              Fraunhofer-Institut für Angewandte und Integrierte Sicherheit
              AISEC
            </p>
            <hr className="mt-1 border-black/20 col-span-4" />
            <p className="col-span-1 text-right">
              <em>
                Period <br />
                Position <br />
                Company
              </em>
            </p>
            <p className="col-span-3">
              01/10/2020 - 01/10/2021 <br />
              Working student in food retailing <br />
              Lidl Vertriebs- GmbH & Co. KG
            </p>
            <hr className="mt-1 border-black/20 col-span-4" />
            <p className="col-span-1 text-right">
              <em>
                Period <br />
                Position <br />
                Company
              </em>
            </p>
            <p className="col-span-3">
              17/09/2021 - 17/09/2022 <br />
              Working student in project management for digital projects <br />
              Siemens Betriebskrankenkasse
            </p>
          </div>
        </div> */}
      </Pane>
    </div>
  </div>
);

export default IndexPage;
