import { Router } from "express";
const router = Router();
import path from "path";
const __dirname = path.resolve();

import signale from "signale";
import signaleConfig from "../../config/signaleConfig.js";

//get access to user object by doing req.oidc.user
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));

  if (req.oidc.isAuthenticated()) {
    signale.success(`User ${req.oidc.user.email} is logged in`);
    signale.info(req.oidc.user);
  } else {
    signale.warn("User is not logged in");
  }
});

export default router;
