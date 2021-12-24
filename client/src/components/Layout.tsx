import { Box, Container } from "@chakra-ui/react";
import { NextRouter } from "next/router";
import React from "react";
import { Footer } from "./Footer";
import NavBar from "./NavBar";

interface LayoutProps {
  children?: any;
  router: NextRouter;
}

export const Layout: React.FC<LayoutProps> = ({ children, router }) => {
  return (
    <Box>
      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
