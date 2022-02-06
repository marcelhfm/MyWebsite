import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <body className="bg-base text-yellow-50">
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </body>
  );
}

export default MyApp;
