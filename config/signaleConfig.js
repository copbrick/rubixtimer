import signale from "signale";
import settings from "./settings.js";

export default signale.config({
  displayDate: false,
  displayFilename: false,
  displayTimestamp: true,
  displayLabel: true,
  displayScope: true
});

if (JSON.parse(settings.debug) == true) {
  signale.note("debug mode is on");
} else {
  signale.disable();
}
