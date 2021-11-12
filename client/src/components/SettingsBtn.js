import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";

export default function SettingsBtn() {
  return (
    <IconButton
      sx={{
        position: "absolute",
        top: "0px",
        right: "0px",
        width: "5%",
        height: "5%",
        color: "red",
        cursor: "pointer",
      }}
    >
      <SettingsIcon />
    </IconButton>
  );
}
