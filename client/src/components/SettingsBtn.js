import React from "react";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SettingsBtn(props) {
  return (
    <IconButton
      sx={{
        position: "absolute",
        top: "2%",
        right: "1%",
        color: "white",
        cursor: "pointer",
        transform: "scale(1.8)",
      }}
      onClick={props.onClick}
    >
      <SettingsIcon />
    </IconButton>
  );
}
