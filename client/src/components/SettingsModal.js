import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import SettingsBtn from "./SettingsBtn";
import { GithubPicker } from "react-color";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SettingsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [color, setColor] = useState("#ff0000");
  const handleChangeComplete = (color) => {
    setColor(color.hex);
    localStorage.setItem("color", JSON.stringify(color.hex));
    console.log(color.hex);
  };

  useEffect(() => {
    const color = localStorage.getItem("color");
    if (color) {
      setColor(JSON.parse(color));
    }
  }, []);

  return (
    <div>
      <SettingsBtn onClick={handleOpen}>Open modal</SettingsBtn>
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
              Change Background
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2, overflowY: "visible" }}
            >
              <GithubPicker
                color={color}
                onChangeComplete={handleChangeComplete}
              />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
