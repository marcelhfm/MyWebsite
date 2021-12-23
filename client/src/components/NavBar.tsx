import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import ThemeToggle from "./ThemToggle";

interface LinkItemProps {
  href: string;
  path: string;
  _target?: string;
  children?: any;
  props?: any;
}

export const LinkItem: React.FC<LinkItemProps> = ({
  href,
  path,
  _target,
  children,
  ...props
}) => {
  const active = path === href;
  console.log("active: ", active);
  console.log("path: ", path);
  console.log("href", href);
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const NavBar = (props) => {
  const { path } = props;

  return (
    <Box
      position="sticky"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          {/* <Menu>
            {" "}
            <MenuButton
              p={2}
              bg={active ? "grassTeal" : undefined}
              color={active ? "#202023" : inactiveColor}
              variant="ghost"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Projects
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => router.push("/projects")}>
                All projects
              </MenuItem>
              <MenuItem>Project 1</MenuItem>
              <MenuItem>Project 2</MenuItem>
              <MenuItem>Project 3</MenuItem>
              <MenuItem>Project 4</MenuItem>
            </MenuList>
          </Menu>

          <ButtonGroup variant="ghost" spacing="4">
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
          </Box> */}
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggle />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
