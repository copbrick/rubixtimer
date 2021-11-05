import { Router } from "express";
const router = Router();
import path from "path";
const __dirname = path.resolve();

import signale from "signale";
import signaleConfig from "../../config/signaleConfig.js";

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
  console.log("Root Request Made: " + req.oidc.user);
});

export default router;
