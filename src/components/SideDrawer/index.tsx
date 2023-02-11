import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "../Button";
import colors from "../../theme/colors";
import { DragEdge } from "../svgs";

interface SideDrawerProps {
  actionButton: React.ReactNode;
  children: React.ReactNode;
  anchor?: "left" | "right" | undefined;
  fullWidth?: boolean | undefined;
  setWidth?: string | undefined;
}
export default function SideDrawer(props: SideDrawerProps) {
  const { actionButton, anchor, children, fullWidth, setWidth } = props;
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <div>
      <React.Fragment key={anchor ?? "right"}>
        <Button
          className="side-drawer-toggle"
          isIcon
          fullWidth={false}
          onClick={toggleDrawer(true)}
          size="small"
        >
          {actionButton}
        </Button>
        <Drawer
          anchor={anchor ?? "right"}
          open={state}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              minWidth: fullWidth ? "100vw" : setWidth ?? "calc(100vw / 1.5)",
              maxWidth: fullWidth ? "100vw" : setWidth ?? "calc(100vw / 1.5)",
              background: `${colors.bg}`,
              position: "relative",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            {children}
            <Button
              isIcon
              onClick={toggleDrawer(false)}
              style={{
                position: "absolute",
                top: "0",
                justifyContent: "flex-start",
                zIndex: "50",
              }}
            >
              {
                <DragEdge
                  width="24px"
                  height="32px"
                  stroke="#005b5b"
                  bg="none"
                />
              }
            </Button>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
