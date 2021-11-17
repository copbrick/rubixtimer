import React from "react";
import IconButton from "@mui/material/IconButton";
import PersonIcon from '@mui/icons-material/Person';

export default function ProfileButton(props) {
  return (
    <IconButton
      sx={{
        position: "absolute",
        top: "2%",
        left: "1%",
        color: "white",
        cursor: "pointer",
        transform: "scale(1.8)",
      }}
      onClick={props.onClick}
    >
      <PersonIcon />
    </IconButton>
  );
}
