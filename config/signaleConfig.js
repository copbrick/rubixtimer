import signale from "signale";
import settings from "./settings.js";

export default signale.config({
  displayTimestamp: true,
  displayFilename: false,
  displayLabel: true,
  displayDate: true,
  displayScope: true
});

if (JSON.parse(settings.debug) == true) {
  signale.note("debug mode is on");
} else {
  signale.disable();
}
