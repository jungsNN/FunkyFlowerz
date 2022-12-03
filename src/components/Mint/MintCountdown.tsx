import Countdown from "react-countdown";
import React from "react";
import { Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Title } from "../shared";
import colors from "../../theme/colors";
import { useStore } from "../../hooks";

const useStyles = ({ isMobile }: { isMobile: boolean }) =>
  makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        padding: theme.spacing(2),
        "& > *": {
          margin: theme.spacing(0.4),
          width: theme.spacing(6),
          height: theme.spacing(6),
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          background: "#384457",
          color: colors.textPrimary,
          borderRadius: 4,
          fontSize: 10,
        },
      },
      done: {
        display: "flex",
        margin: 0,
        marginTop: 0,
        height: isMobile
          ? "32px"
          : `calc(100vw * (${theme.spacing(3)} / 1512))`,
        paddingLeft: `calc(100vw * (${theme.spacing(3.3)} / 1512))`,
        paddingRight: `calc(100vw * (${theme.spacing(3.3)} / 1512))`,
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        background: "#384457",
        color: colors.textPrimary,
        borderRadius: 4,
      },
      item: {},
    })
  );

interface MintCountdownProps {
  date: Date | undefined;
  style?: React.CSSProperties;
  status?: string;
  onComplete?: () => void;
}

interface MintCountdownRender {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export const MintCountdown: React.FC<MintCountdownProps> = ({
  date,
  status,
  style,
  onComplete,
}) => {
  const isMobile = useStore.getState().isMobile;
  const classes = useStyles({ isMobile })();
  const renderCountdown = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: MintCountdownRender) => {
    hours += days * 24;
    if (completed) {
      return status ? (
        <span className={classes.done}>
          <Title bold variant="caption">
            {status}
          </Title>
        </span>
      ) : null;
    } else {
      return (
        <div className={classes.root} style={style}>
          <Paper elevation={0}>
            <span className={classes.item}>
              <Title bold variant="caption">
                {hours < 10 ? `0${hours}` : hours}
              </Title>
            </span>
            <span>hrs</span>
          </Paper>
          <Paper elevation={0}>
            <span className={classes.item}>
              <Title bold variant="caption">
                {minutes < 10 ? `0${minutes}` : minutes}
              </Title>
            </span>
            <span>mins</span>
          </Paper>
          <Paper elevation={0}>
            <span className={classes.item}>
              <Title bold variant="caption">
                {seconds < 10 ? `0${seconds}` : seconds}
              </Title>
            </span>
            <span>secs</span>
          </Paper>
        </div>
      );
    }
  };

  if (date) {
    return (
      <Countdown
        date={date}
        onComplete={onComplete}
        renderer={renderCountdown}
      />
    );
  } else {
    return null;
  }
};

export default MintCountdown;
