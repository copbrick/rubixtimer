import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";

export default function SettingsBtn() {
  return (
    <IconButton
      sx={{
        position: "absolute",
        top: "1%",
        right: "1%",
        color: "white",
        cursor: "pointer",
        transform: "scale(1.8)",
      }}
    >
      <SettingsIcon />
    </IconButton>
  );
}
