import "./css/common.css";
import lamp from "./image/mildness.png";
import blackboard from "./image/blackboard.png";

console.log("hello, this is webpack demo");
window.document.getElementById(
  "app"
).innerHTML = `<img class='window-bg' src='${blackboard}' />`;
