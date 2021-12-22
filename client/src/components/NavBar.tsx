import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Link,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const boxColor = useColorModeValue("gray.300", "gray.600");
  const router = useRouter();
  return (
    <Flex zIndex={1} position="sticky" top={0} bg={boxColor} p={2}>
      <NextLink href="/">
        <Link textDecoration={"none"}>
          <Heading mr={4}>Marcel Hofmann</Heading>
        </Link>
      </NextLink>
      <ButtonGroup variant="ghost" spacing="4">
        <Button onClick={() => router.push("/projects")}>Projects</Button>
        <Button onClick={() => router.push("/about")}>
          About this Website
        </Button>
        <Button onClick={() => router.push("/contact")}>Contact Me</Button>
      </ButtonGroup>
      <Spacer />
      <Box>
        <Button ml="auto" onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Box>
    </Flex>
  );
};
