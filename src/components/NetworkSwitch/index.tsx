import { alpha } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import styled from "styled-components";
import colors from "@/theme/colors";

const ColoredSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: colors.purple,
    "&:hover": {
      backgroundColor: alpha(colors.purple, 0.3),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: colors.purple,
  },
  "& .MuiSwitch-switchBase": {
    color: colors.orange,
    "&:hover": {
      backgroundColor: alpha(colors.orange, 0.3),
    },
  },
  "& .MuiSwitch-switchBase + .MuiSwitch-track": {
    backgroundColor: colors.orange,
  },
}));

const NetworkSwitch = ({
  isMobile,
  network,
  onToggle,
}: {
  isMobile: boolean;
  network: string;
  onToggle: () => void;
}) => {
  const labelProps = {
    componentsProps: { typography: { fontSize: isMobile ? "10px" : "12px" } },
  };
  return (
    <FormGroup>
      <FormControlLabel
        {...labelProps}
        control={
          <ColoredSwitch
            checked={network === "mainnet-beta"}
            size={isMobile ? "small" : "medium"}
            onChange={onToggle}
            value={network}
          />
        }
        label={network}
        labelPlacement="bottom"
      />
    </FormGroup>
  );
};

export default NetworkSwitch;
