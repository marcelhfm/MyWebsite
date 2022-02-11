import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <body className="bg-base text-yellow-50">
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default MyApp;
