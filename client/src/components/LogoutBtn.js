import React from "react";
import Button from "@mui/material/Button";

function LogoutBtn() {
    return (
      <div>
          <Button href = "/logout" variant="contained">Logout</Button>
      </div>
    );
  }

export default LogoutBtn;