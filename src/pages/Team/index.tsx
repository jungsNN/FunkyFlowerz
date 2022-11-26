import { Container, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { InstagramIcon, TeamIvor, TeamJenny, TwitterIcon } from "../../components/svgs";

const IVOR =
  'Ivor Guest is a designer and art director based in New York, who created the art for Funky Flowerz. His inspiration came from Benyamin Ahmed\'s "Weird Whales" collection, mixed with his love for flowers and the game Pikmin.';
const JENNY = "Jenny Jung is a software engineer at WeWork. As a former web3 frontend engineer, she continues to pioneer in the web3 space, and has packaged the art and metadata into NFTs for Funky Flowerz. Her areas of expertise include Web3, mobile development, full stack and machine learning.";

const Team = () => {
  return (
    <Container style={{ paddingBottom: "10rem" }}>
      <Grid container direction="column" style={{ gridGap: 140 }}>
        <div className="team-ivor">
          <div>
            <TitleWrapper>
              <TeamIvor />
            </TitleWrapper>
            <div>
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
          <MemberDescrition>
            <Typography>{IVOR}</Typography>
          </MemberDescrition>
        </div>
        <div className="team-jenny">
          <div>
            <TitleWrapper>
              <TeamJenny />
            </TitleWrapper>
            <div>
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
          <MemberDescrition>
            <Typography>{JENNY}</Typography>
          </MemberDescrition>
        </div>
      </Grid>
    </Container>
  );
};

const TitleWrapper = styled.div`
  padding-left: 2rem;
  svg {
    width: 100%;
    height: 100%;
    max-width: calc(100vw / 4);
  }
`;

const MemberDescrition = styled.div`
  padding-left: 2rem;
  margin-top: 36px;
  p {
    font-size: 24px;
  }
`;

export default Team;
