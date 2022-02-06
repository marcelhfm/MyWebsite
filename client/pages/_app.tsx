import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </div>
  );
}

export default MyApp;
