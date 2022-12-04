import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FlowerSamples, Page } from "../../components";
import { Grid, Text } from "../../components/shared";
import {
  InstagramIcon,
  TeamIvor,
  TeamJenny,
  TwitterIcon,
} from "../../components/svgs";

type MemberProps = {
  bio: string;
  headerIcon: React.ReactNode;
  instagram: string;
  twitter: string;
};

const IVOR: MemberProps = {
  bio: 'Ivor Guest is a designer and art director based in New York, who created the art for Funky Flowerz. His inspiration came from Benyamin Ahmed\'s "Weird Whales" collection, mixed with his love for flowers and the game Pikmin.',
  headerIcon: <TeamIvor />,
  instagram: "https://instagram.com/",
  twitter: "https://twitter.com/",
};

const JENNY: MemberProps = {
  bio: "Jenny Jung is a software engineer at WeWork and a former web3 frontend engineer. She continues to pioneer in the web3 space, and has packaged the art and metadata into NFTs for Funky Flowerz. Her areas of expertise include Web3, mobile development, full stack and machine learning.",
  headerIcon: <TeamJenny />,
  instagram: "https://instagram.com/wldo_jenny",
  twitter: "https://twitter.com/jungsnn",
};

const Member = ({
  member,
  onNavigate,
}: {
  member: MemberProps;
  onNavigate: (url: string) => void;
}) => {
  return (
    <MemberContainer className="team-ivor" display="grid" gridAutoFlow="row">
      <MemberHeader display="grid" gridAutoFlow="column">
        <TitleWrapper>{member.headerIcon}</TitleWrapper>
        <SocialIcons display="grid" gridAutoFlow="column">
          <div onClick={() => onNavigate(member.instagram)}>
            <InstagramIcon />
          </div>
          <div onClick={() => onNavigate(member.twitter)}>
            <TwitterIcon />
          </div>
        </SocialIcons>
      </MemberHeader>
      <MemberDescrition>
        <Text thin size="lg">
          {member.bio}
        </Text>
      </MemberDescrition>
    </MemberContainer>
  );
};

const Team = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Section container direction="column">
        <Member member={IVOR} onNavigate={navigate} />
        <Member member={JENNY} onNavigate={navigate} />
        {/* <MemberContainer
          className="team-jenny"
          display="grid"
          gridAutoFlow="row"
        >
          <MemberHeader display="grid" gridAutoFlow="column">
            <TitleWrapper>
              <TeamJenny />
            </TitleWrapper>
            <SocialIcons display="grid" gridAutoFlow="column">
              <div onClick={() => navigate(JENNY.instagram)}>
                <InstagramIcon />
              </div>
              <div onClick={() => navigate(JENNY.twitter)}>
                <TwitterIcon />
              </div>
            </SocialIcons>
          </MemberHeader>
          <MemberDescrition>
            <Text thin size="lg">
              {JENNY.bio}
            </Text>
          </MemberDescrition>
        </MemberContainer> */}
        <FlowerSamplesContainer>
          <FlowerSamples />
        </FlowerSamplesContainer>
      </Section>
    </Page>
  );
};

const FlowerSamplesContainer = styled.div`
  margin-top: calc(100vw * (120 / 1512));

  @media (min-width: 1512px) {
    margin-top: 120px;
  }
`;

const MemberDescrition = styled.div`
  height: calc(100vw * (209 / 1512));

  p {
    font-size: calc(100vw * (30 / 1512));
    line-height: calc(100vw * (36 / 1512));
  }

  @media (min-width: 1512px) {
    height: 209px;
    p {
      font-size: 30px;
      line-height: 36px;
    }
  }
`;

const MemberContainer = styled(Grid)`
  grid-gap: calc(100vw * (28 / 1512));

  @media (min-width: 1512px) {
    grid-gap: 28px;
  }
`;

const MemberHeader = styled(Grid)`
  height: 100%;
  align-items: center;
  justify-content: start;
  grid-gap: calc(100vw * (40 / 1512));

  @media (min-width: 1512px) {
    grid-gap: 40px;
  }
`;

const Section = styled(Grid)``;

const SocialIcons = styled(Grid)`
  align-items: center;
  grid-gap: calc(100vw * (32 / 1512));

  svg {
    cursor: pointer;
    height: calc(100vw (48 / 1512));
    width: calc(100vw (48 / 1512));
  }

  @media (min-width: 1512px) {
    grid-gap: 32px;

    svg {
      height: 48px;
      width: 48px;
    }
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: calc(100vw * (76 / 1512));
  padding: calc(100vw * (15 / 1512)) 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

// & > * {
//   button {
// svg {
//   height: calc(100vw (48 / 1512));
//   width: calc(100vw (48 / 1512));
// }
//   }
// }

// @media (min-width: 1512px) {
//   grid-gap: 32px;

//   & > * {
//     button {
// svg {
//   height: 48px;
//   width: 48px;
// }
//     }
//   }
// }
export default Team;
