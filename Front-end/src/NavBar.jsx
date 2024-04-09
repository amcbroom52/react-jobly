import { NavLink } from "react-router-dom";
import "./NavBar.css";

/** Navigation bar component.
 *
 * State: none
 *
 * Props: none
 */

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar-left">
        <NavLink className="NavBar-link-home" to="/">Jobly</NavLink>
      </div>
      <div className="NavBar-right">
        <NavLink className="NavBar-link" to="/companies">Companies</NavLink>
        <NavLink className="NavBar-link" to="/jobs">Jobs</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
