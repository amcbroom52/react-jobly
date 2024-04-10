import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import userContext from "../user/userContext";

/** Navigation bar component.
 *
 * State: none
 *
 * Props:
 * - logOut(): fn to call in parent
 */

function NavBar({logOut}) {
  console.log("in rendering NavBar");
  const {user} = useContext(userContext);

  return (
    <div className="NavBar">
      <div className="NavBar-left">
        <NavLink className="NavBar-link-home" to="/">Jobly</NavLink>
      </div>
      <div className="NavBar-right">
        <NavLink className="NavBar-link" to="/companies">Companies</NavLink>
        <NavLink className="NavBar-link" to="/jobs">Jobs</NavLink>
        <NavLink className="NavBar-link" to="/profile">Profile</NavLink>
        <NavLink className="NavBar-link" to="/" onClick={logOut}>Logout {user.username}</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
