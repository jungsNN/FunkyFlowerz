import styled from "styled-components";
import { Page } from "../../components";
import { Text } from "../../components/shared";
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
  instagram: "https://www.instagram.com/guestudios/?hl=en",
  twitter: "https://twitter.com/ivorguest",
};

const JENNY: MemberProps = {
  bio: "Jenny Jung is a software engineer at WeWork and a former web3 frontend engineer. She continues to pioneer in the web3 space, and has packaged the art and metadata into NFTs for Funky Flowerz. Her areas of expertise include Web3, mobile development, full stack and machine learning.",
  headerIcon: <TeamJenny />,
  instagram: "https://instagram.com/jenny_wldo",
  twitter: "https://twitter.com/jungsnn",
};

const Member = ({ member }: { member: MemberProps }) => {
  return (
    <MemberContainer>
      <MemberHeader>
        <TitleWrapper>{member.headerIcon}</TitleWrapper>
        <SocialIcons>
          <a href={member.instagram} rel="noreferrer" target="_blank">
            <InstagramIcon />
          </a>
          <a href={member.twitter} rel="noreferrer" target="_blank">
            <TwitterIcon />
          </a>
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
  return (
    <Page>
      <Section>
        <Member member={IVOR} />
        <Member member={JENNY} />
        <FlowerSamplesContainer className="flower-samples">
          <img src="./funkyflowerz-bg.png" alt="funkyflowerz-samples" />
        </FlowerSamplesContainer>
      </Section>
    </Page>
  );
};

const FlowerSamplesContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-top: calc(100vw * (120 / 1512));
  padding-left: 0;
  padding-right: 0;
  width: 100%;

  img {
    height: 100%;
    width: calc(100vw * (608 / 1512));
  }

  @media (min-width: 1512px) {
    margin-top: 120px;

    img {
      width: 608px;
    }
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    padding-left: calc(100vw * (44 / 480));
    padding-right: calc(100vw * (44 / 480));
    img {
      width: 100%;
    }
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

  ${(props) => props.theme.mediaQueries.mobile} {
    height: 100%;
    padding-bottom: calc(100vw * (96 / 480));

    p {
      font-size: calc(100vw * (24 / 480));
      line-height: calc(100vw * (32 / 480));
      margin-top: calc(100vw * (16 / 480));
    }
  }
`;

const MemberContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: calc(100vw * (28 / 1512));

  @media (min-width: 1512px) {
    grid-gap: 28px;
  }
  ${(props) => props.theme.mediaQueries.mobile} {
    grid-gap: calc(100vw * (16 / 480));
  }
`;

const MemberHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
  grid-gap: calc(100vw * (40 / 1512));

  @media (min-width: 1512px) {
    grid-gap: 40px;
  }
  ${(props) => props.theme.mediaQueries.mobile} {
    grid-gap: calc(100vw * (32 / 480));
  }
`;

const Section = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  justify-content: center;
  align-items: start;
`;

const SocialIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: flex-start;
  grid-gap: calc(100vw * (32 / 1512));

  svg {
    cursor: pointer;
    height: calc(100vw * (48 / 1512));
    width: calc(100vw * (48 / 1512));
  }

  @media (min-width: 1512px) {
    grid-gap: 32px;

    svg {
      height: 48px;
      width: 48px;
    }
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    grid-gap: calc(100vw * (30 / 480));

    svg {
      height: calc(100vw * (30 / 480));
      width: calc(100vw * (30 / 480));
    }
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: calc(100vw * (76 / 1512));
  padding-bottom: calc(100vw * (15 / 1512));
  padding-top: calc(100vw * (15 / 1512));

  svg {
    width: 100%;
    height: 100%;
  }
  ${(props) => props.theme.mediaQueries.mobile} {
    height: 100%;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

export default Team;
