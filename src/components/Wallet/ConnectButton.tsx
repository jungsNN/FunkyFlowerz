import styled from "styled-components";
import { WalletModalButton } from "@solana/wallet-adapter-react-ui";
import { Title } from "../shared";

interface ConnectButtonProps {
  isMobile: boolean;
  buttonText?: string;
}

const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const { buttonText, isMobile, ...rest } = props;
  return (
    <StyledConnectButton
      isMobile={isMobile}
      maxw={isMobile ? 480 : 1512}
      {...rest}
    >
      <ButtonLabel small>
        {buttonText ?? (isMobile ? "Connect" : "Connect Wallet")}
      </ButtonLabel>
    </StyledConnectButton>
  );
};
// height: auto;
//   min-height: calc(100vw * (62 / ${({ maxw }) => `${maxw}`}));
// > * {
//   font-size: calc(100vw * (24 / ${({ maxw }) => `${maxw}`}));
// }
const StyledConnectButton = styled(WalletModalButton)<{
  isMobile: boolean;
  maxw: number;
}>`
  width: 100%;
  min-width: calc(100vw * (237 / ${({ maxw }) => `${maxw}`}));
  max-width: calc(100vw * (237 / ${({ maxw }) => `${maxw}`}));
  height: calc(
    100vw *
      (
        ${({ isMobile }) => (isMobile ? "48" : "62")} /
          ${({ maxw }) => `${maxw}`}
      )
  );
  padding: 0;
  background: ${(props) => props.theme.colors.pink};
  color: white;
  font-family: inherit;
  font-weight: 700;
  border-radius: calc(100vw * (20 / ${({ maxw }) => `${maxw}`}));

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
    min-width: calc(100vw * (160 / ${({ maxw }) => `${maxw}`}));
    max-width: calc(100vw * (160 / ${({ maxw }) => `${maxw}`}));
  }
`;

const ButtonLabel = styled(Title)``;

export default ConnectButton;
