import { Container, Grid, Typography } from "@material-ui/core";
import styled, { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { Col, Row } from "../../components/shared";
import {
  InstagramIcon,
  TeamIvor,
  TeamJenny,
  TwitterIcon,
} from "../../components/svgs";
import { useStore } from "../../hooks";

const IVOR = {
  bio: 'Ivor Guest is a designer and art director based in New York, who created the art for Funky Flowerz. His inspiration came from Benyamin Ahmed\'s "Weird Whales" collection, mixed with his love for flowers and the game Pikmin.',
  instagram: "https://instagram.com/",
  twitter: "https://twitter.com/",
};

const JENNY = {
  bio: "Jenny Jung is a software engineer at WeWork and a former web3 frontend engineer. She continues to pioneer in the web3 space, and has packaged the art and metadata into NFTs for Funky Flowerz. Her areas of expertise include Web3, mobile development, full stack and machine learning.",
  instagram: "https://instagram.com/wldo_jenny",
  twitter: "https://twitter.com/jungsnn",
};

const Team = () => {
  const theme = useTheme();
  const store = useStore();
  const navigate = useNavigate();

  return (
    <Container style={{ paddingBottom: "10rem" }}>
      <Grid
        container
        direction="column"
        style={{ gridGap: store.isMobile ? "72px" : 140 }}
      >
        <Row className="team-ivor">
          <MemberHeader
            defaultGap={`${theme.spacing[5]}px`}
            adjustVal={`${theme.spacing[1]}px`}
          >
            <TitleWrapper>
              <TeamIvor />
            </TitleWrapper>
            <SocialIcons>
              <Button onClick={() => navigate(IVOR.instagram)}>
                <InstagramIcon />
              </Button>
              <Button onClick={() => navigate(IVOR.twitter)}>
                <TwitterIcon />
              </Button>
            </SocialIcons>
          </MemberHeader>
          <MemberDescrition>
            <Typography>{IVOR.bio}</Typography>
          </MemberDescrition>
        </Row>
        <Row className="team-jenny">
          <MemberHeader
            defaultGap={`${theme.spacing[5]}px`}
            adjustVal={`${theme.spacing[1]}px`}
          >
            <TitleWrapper>
              <TeamJenny />
            </TitleWrapper>
            <SocialIcons>
              <Button onClick={() => navigate(JENNY.instagram)}>
                <InstagramIcon />
              </Button>
              <Button onClick={() => navigate(JENNY.twitter)}>
                <TwitterIcon />
              </Button>
            </SocialIcons>
          </MemberHeader>
          <MemberDescrition>
            <Typography>{JENNY.bio}</Typography>
          </MemberDescrition>
        </Row>
      </Grid>
    </Container>
  );
};

const TitleWrapper = styled.div`
  svg {
    width: 100%;
    height: 100%;
    min-height: 72px;
    max-height: 72px;
  }
  ${({ theme }) => theme.mediaQueries.tablet} {
    svg {
      min-height: 48px;
      max-height: 48px;
    }
  }
  ${({ theme }) => theme.mediaQueries.mobile} {
    svg {
      min-height: 24px;
      max-height: 24px;
    }
  }
`;

const MemberDescrition = styled.div`
  margin-top: 36px;
  p {
    font-size: 32px;
  }
  ${({ theme }) => theme.mediaQueries.tablet} {
    p {
      font-size: 24px;
    }
  }
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin-top: 24px;
    p {
      font-size: 18px;
    }
  }
`;

const MemberHeader = styled(Col)`
  height: 100%;
  align-items: center;
  justify-content: start;
`;

const SocialIcons = styled(Col)`
  justify-content: start;
  align-items: center;
  grid-gap: 32px;
  svg {
    width: 48px;
    height: 48px;
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-gap: 24px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  ${({ theme }) => theme.mediaQueries.mobile} {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export default Team;
