import signale from "signale";
import settings from "./settings.js";

export default signale.config({
    "displayScope": true,
    "displayBadge": true,
    "displayDate": false,
    "displayFilename": false,
    "displayLabel": true,
    "displayTimestamp": true,
    "underlineLabel": true,
    "underlineMessage": false,
    "underlinePrefix": false,
    "underlineSuffix": false,
    "uppercaseLabel": false
});
    
if (JSON.parse(settings.debug) == true) {
  signale.note("debug mode is on");
} else {
  signale.disable();
}
