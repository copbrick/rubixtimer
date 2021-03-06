import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import ProfileButton from "./Buttons/ProfileButton";
import LogoutButton from "./Buttons/LogoutButton";
import { baseURL } from "../config/BaseURL";
import axios from "axios";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProfileModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(`${baseURL}/api/user`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ProfileButton onClick={handleOpen}>Open modal</ProfileButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Logged in as :{" "}
              {data.email ? data.email : "You are not currently logged in!"}
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2, overflowY: "visible" }}
            ></Typography>
            <LogoutButton />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
