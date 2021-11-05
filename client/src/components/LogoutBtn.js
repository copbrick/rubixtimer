import React, { Component } from "react";
import Button from "@mui/material/Button";

function LogoutBtn() {
    return (
      <div>
        <a href="/logout">
          <Button variant="contained">Logout</Button>
        </a>
      </div>
    );
  }

export default LogoutBtn;