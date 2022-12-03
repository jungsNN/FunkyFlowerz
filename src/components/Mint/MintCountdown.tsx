import Countdown from "react-countdown";
import React from "react";
import { Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Text } from "../shared";
import colors from "../../theme/colors";
import { useStore } from "../../hooks";

const useStyles = ({ isMobile }: { isMobile: boolean }) =>
  makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        padding: theme.spacing(0),
        justifyContent: "flex-end",
        "& > *": {
          margin: theme.spacing(0.4),
          width: isMobile ? "32px" : `calc(100vw * (37 / 1512))`,
          height: isMobile ? "32px" : `calc(100vw * (36 / 1512))`,
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          background: "#384457",
          color: colors.textPrimary,
          borderRadius: 4,
          fontSize: `calc(100vw * (10 / 1512))`,
        },
      },
      done: {
        display: "flex",
        margin: 0,
        marginTop: 1,
        height: isMobile ? "32px" : `calc(100vw * (30 / 1512))`,
        paddingLeft: `calc(100vw * (${theme.spacing(1)} / 1512))`,
        paddingRight: `calc(100vw * (${theme.spacing(1)} / 1512))`,
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        background: "#384457",
        color: colors.textPrimary,
        borderRadius: 4,
      },
      item: {
        "& > p": {
          fontSize: "calc(100vw * (18 / 1512))",
          lineHeight: "calc(100vw * (22 / 1512))",
          marginTop: "calc(100vw * (4 / 1512))",
        },
      },
    })
  );

interface MintCountdownProps {
  date: Date | undefined;
  style?: React.CSSProperties;
  status?: string;
  onComplete?: () => void;
  isMock?: boolean;
  showMockCountdown?: boolean;
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
  isMock = false,
  showMockCountdown = false,
}) => {
  console.log({ date });
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
    if (completed || (isMock && !showMockCountdown)) {
      return status ? (
        <span className={classes.done}>
          <Text size="sm">{status}</Text>
        </span>
      ) : null;
    } else {
      return (
        <div className={classes.root} style={style}>
          <Paper elevation={0}>
            <span className={classes.item}>
              <Text size="sm">{hours < 10 ? `0${hours}` : hours}</Text>
            </span>
            <span>hrs</span>
          </Paper>
          <Paper elevation={0}>
            <span className={classes.item}>
              <Text size="sm">{minutes < 10 ? `0${minutes}` : minutes}</Text>
            </span>
            <span>mins</span>
          </Paper>
          <Paper elevation={0}>
            <span className={classes.item}>
              <Text size="sm">{seconds < 10 ? `0${seconds}` : seconds}</Text>
            </span>
            <span>secs</span>
          </Paper>
        </div>
      );
    }
  };

  if (isMock || date) {
    return (
      <Countdown
        date={date ?? new Date(Date.now() + 36000)}
        onComplete={isMock ? () => {} : onComplete}
        renderer={renderCountdown}
      />
    );
  } else {
    return null;
  }
};

export default MintCountdown;
