import { NavLink } from "react-router-dom";
import "./NavBar.css";

/** Navigation bar component.
 *
 * State: none
 *
 * Props: none
 */

// TODO: consolidate in one nav bar
// functions to call appropriate navbar
function AnonNavBar() {
  console.log("in rendering NavBar");

  return (
    <div className="NavBar">
      <div className="NavBar-left">
        <NavLink className="NavBar-link-home" to="/">Jobly</NavLink>
      </div>
      <div className="NavBar-right">
        <NavLink className="NavBar-link" to="/login">Log In</NavLink>
        <NavLink className="NavBar-link" to="/signup">Sign Up</NavLink>
      </div>
    </div>
  );
}

export default AnonNavBar;