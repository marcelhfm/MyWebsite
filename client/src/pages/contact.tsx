import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Pane } from "../components/Pane";
import { SocialMediaBox } from "../components/SocialMediaBox";
import { SocialMediaIconsReact } from "social-media-icons-react";

const Contact = () => {
  return (
    <>
      <div>
        <Head>
          <title>Contact | Marcel Hofmann</title>
        </Head>
      </div>

      <Pane title="Social Media">
        <Flex>
          <SocialMediaBox
            icon={
              <SocialMediaIconsReact
                borderWidth="0"
                icon="linkedin"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(0,115,177,1)"
                iconSize="5"
                roundness="20%"
                size="70"
              />
            }
            link="https://www.linkedin.com/in/marcel-hofmann-742555221/"
            title="linkedin"
            desc="View my linkedin profile here."
          />
          <SocialMediaBox
            icon={
              <SocialMediaIconsReact
                borderWidth="0"
                icon="github"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(22,20,20,1)"
                iconSize="5"
                roundness="20%"
                size="70"
              />
            }
            link="https://github.com/marcelhfm"
            title="GitHub"
            desc="View my GitHub Repositories here."
          />
        </Flex>
        <Flex>
          <SocialMediaBox
            icon={
              <SocialMediaIconsReact
                borderWidth="0"
                icon="twitter"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(78,166,233,1)"
                iconSize="5"
                roundness="20%"
                size="70"
              />
            }
            link="https://twitter.com/MarcelHofm"
            title="Twitter"
            desc="View my Twitter profile here."
          />
          <SocialMediaBox
            icon={
              <SocialMediaIconsReact
                borderWidth="0"
                icon="mail"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="rgba(241,124,61,1)"
                iconSize="5"
                roundness="20%"
                size="70"
              />
            }
            link="mailto:marcel.hofmann@hofmania.de"
            title="Email"
            desc="Good ol' fashionedㅤㅤㅤ"
          />
        </Flex>
      </Pane>
    </>
  );
};

export default Contact;
