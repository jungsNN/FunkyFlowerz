import styled from "styled-components";
import { WalletModalButton } from "@solana/wallet-adapter-react-ui";
import colors from "../../theme/colors";
import { Grid, Title } from "../shared";
import { WalletIcon } from "../svgs";

interface ConnectButtonProps {
  isMobile: boolean;
  buttonText?: string;
}

const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const { buttonText, isMobile, ...rest } = props;
  return (
    <StyledConnectButton {...rest}>
      {isMobile && (
        <Grid display="grid" gap="4px" gridAutoFlow="column" justify="center">
          <ButtonLabel small>{buttonText ?? "Connect"}</ButtonLabel>
          <WalletIcon
            stroke="white"
            bg={colors.pink}
            width="24px"
            height="24px"
          />
        </Grid>
      )}
      <ButtonLabel small>
        {!isMobile && (buttonText ?? "Connect Wallet")}
      </ButtonLabel>
    </StyledConnectButton>
  );
};

const StyledConnectButton = styled(WalletModalButton)`
  width: 100%;
  min-width: calc(100vw * (237 / 1512));
  max-width: calc(100vw * (237 / 1512));
  height: auto;
  min-height: calc(100vw * (62 / 1512));
  max-height: calc(100vw * (62 / 1512));
  padding: 0;
  background: #ff5fdc;
  color: white;
  font-family: inherit;
  font-weight: 700;
  border-radius: calc(100vw * (20 / 1512));
  > * {
    font-size: calc(100vw * (24 / 1512));
  }

  @media (min-width: 1512px) {
    border-radius: 20px;
    min-width: 237px;
    max-width: 237px;
    min-height: 62px;
    max-height: 62px;

    > * {
      font-size: 24px;
    }
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    border-radius: 16px;
    padding: 16px 8px;
    max-width: 128px;

    > & * {
      p {
        margin-top: 8px;
      }
    }
  }
`;

const ButtonLabel = styled(Title)`
  margin-top: 12px;

  ${(props) => props.theme.mediaQueries.tablet} {
    margin-top: 8px;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    margin-top: 10px;
  }
`;

export default ConnectButton;
