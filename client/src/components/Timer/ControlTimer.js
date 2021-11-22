//custom hook from library
import useEventListener from "@use-it/event-listener";

export default function ControlTimer(props) {
  const SPACEBAR = ["32", " "];

  function handler({ key }) {
    if (SPACEBAR.includes(String(key))) {
      props.handleTimer();
    }
  }

  useEventListener("keydown", handler);
  return null;
}
