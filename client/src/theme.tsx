import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";
import "@fontsource/inter";

const fonts = { heading: "inter", body: "inter" };

const styles = {
  global: (props) => ({
    body: {
      bg: mode("yellow.50", "#202023")(props),
    },
  }),
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
  config,
  styles,
});

export default theme;
