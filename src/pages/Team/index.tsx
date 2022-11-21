import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Page from "../../components/Page";
import { InstagramIcon, TwitterIcon } from "../../components/svgs";
import TeamIvor from "../../components/svgs/TeamIvor";
import TeamJenny from "../../components/svgs/TeamJenny";
import useStore from "../../states";

const IVOR =
  "Ivor Guest is a designer and art director based in New York that created the art for this project. His inspiration came from Benyamin Ahmed’s “Weird Whales” collection, mixed with his love for flowers and the game Pikmin.";
const JENNY =
  "Jenny Jung is a software engineer at WeWork, who packaged the art and deployed candy-machine for Funky Flowerz project. Her areas of expertise include Web3, fullstack and machine learning.";
const Team = () => {
  const store = useStore();

  return (
    <Page isMobile={store.isMobile}>
      <Grid container direction="column" style={{ gridGap: 140 }}>
        <div className="grid grid-rows-2 align-start">
          <div className="flex flex-row justify-center">
            <TitleWrapper>
              <TeamIvor />
            </TitleWrapper>
            <SocialIcon href="https://instagram.com/" rel="noopener noreferrer" target="_blank">
              <InstagramIcon/>
            </SocialIcon>
            <SocialIcon href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
              <TwitterIcon/>
            </SocialIcon>
          </div>
          <MemberDescrition>
            <p>{IVOR}</p>
          </MemberDescrition>
        </div>
        <div className="grid grid-rows-2 align-start">
          <div className="flex flex-row justify-center">
            <TitleWrapper>
              <TeamJenny />
            </TitleWrapper>
            <SocialIcon href="https://instagram.com/wldo_jenny" rel="noopener noreferrer" target="_blank">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/jungsnn" rel="noopener noreferrer" target="_blank">
              <TwitterIcon />
            </SocialIcon>
          </div>
          <MemberDescrition>
            <p>{JENNY}</p>
          </MemberDescrition>
        </div>
      </Grid>
    </Page>
  );
};

const MemberDescrition = styled.div`
  margin-top: 36px;
  p {
    font-size: 24px;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  margin-left: 32px;
  svg {
    width: 47px;
    height: 47px;
  }
  @media (max-width: 768px) {
    margin-left: 24px;
    svg {
      width: 32px;
      height: 32px;
    }
  }
  @media (max-width: 479px) {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const TitleWrapper = styled.div`
  margin-right: 16px;
  svg {
      min-width: 528px;
      max-width: 528px;
      height: 100%;
  }
  @media (max-width: 768px) {
    svg {
      min-width: calc(100vw / 1.6);
      max-width: calc(100vw / 1.6);
    }
  }
  @media (max-width: 479px) {
    margin-right: 0;
    svg {
      min-width: calc(100vw / 1.8);
      max-width: calc(100vw / 1.8);
    }
  }
`;

export default Team;
