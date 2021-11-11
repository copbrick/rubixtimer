import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SettingsBtn() {
  return (
    <SettingsIcon
      style={{
        position: "absolute",
        top: "0px",
        right: "0px",
        width: "5%",
        height: "5%",
        color: "red",
        cursor: "pointer",
      }}
    />
  );
}
