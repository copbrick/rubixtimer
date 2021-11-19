import React from "react";
import Button from "@mui/material/Button";

export default function MaterialButton(props) {
  return (
    <Button
      href={props.href}
      variant="contained"
      color="primary"
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
