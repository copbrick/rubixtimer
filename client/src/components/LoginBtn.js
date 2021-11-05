import React, { Component } from "react";
import Button from "@mui/material/Button";

function LoginBtn() {
    return (
      <div>
        <a href="/login">
          <Button variant="contained">Login</Button>
        </a>
      </div>
    );
  }

export default LoginBtn;