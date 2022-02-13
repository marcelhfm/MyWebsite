import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen flex-col bg-base text-yellow-50">
      <Navbar />
      <main className="mb-auto bg-base text-yellow-50">
        <Component {...pageProps} />
      </main>
      <footer className="bg-base text-yellow-50">
        <Footer />
      </footer>
    </div>
    /**
    <body className="bg-base text-yellow-50">
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
     */
  );
}

export default MyApp;
