import { Box } from "@chakra-ui/react";
import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" p={8}>
      © {new Date().getFullYear()} Marcel Hofmann. All rights reserved.
    </Box>
  );
};
