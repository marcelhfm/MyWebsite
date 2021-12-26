import {
  Box,
  useColorModeValue,
  Link,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Pane } from "./Pane";

interface SocialMediaBoxProps {
  title?: any;
  desc?: string;
  icon?: any;
  bgColorLight?: string;
  bgColorDark?: string;
  titleSize?: string;
  descSize?: string;
  link: string;
}

export const SocialMediaBox: React.FC<SocialMediaBoxProps> = ({
  title,
  desc,
  icon,
  bgColorDark,
  bgColorLight,
  titleSize,
  descSize,
  link,
}) => {
  const bgDark = bgColorDark ? bgColorDark : bgColorLight;
  const bgColor = useColorModeValue({ bgColorLight }, { bgDark });
  return (
    <>
      <Box mr={4} width={"50%"}>
        <Link href={link} _hover={{ textDecoration: "none" }} isExternal>
          <Pane padding="2" pb="5">
            <Flex>
              {icon}
              <Box ml={4}>
                <Heading fontSize={titleSize}>{title}</Heading>
                <Text fontSize={descSize}>{desc}</Text>
              </Box>
            </Flex>
          </Pane>
        </Link>
      </Box>
    </>
  );
};
