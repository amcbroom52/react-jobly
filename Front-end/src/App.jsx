import { BrowserRouter } from "react-router-dom";
import NavBar from "./common/NavBar";
import RouteList from "./common/RouteList";
import userContext from "./user/userContext";
import { useEffect, useState } from "react";
import AnonNavBar from "./common/AnonNavBar";
import JoblyApi from "./api/api";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 * App -> {Nav, RouteList}
 */

function App() {
  console.log("in rendering App");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(function setUserOnTokenChange() {
    async function updateUser() {
      if (token) {
        const userData = await JoblyApi.getUser(user.username);
        setUser({
          username: userData.username,
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          jobs: userData.jobs,
          isAdmin: userData.isAdmin,
        });
      }
    }
    updateUser();
  }, [token]);

  /** Takes username and password. Logs in user and updates context. */
  async function login(username, password) {
    const resp = await JoblyApi.login(username, password);
    if ('error' in resp) {
      return;
    }
    setToken(resp.token);
    setUser({ username });
  }

  /** Takes object like {username, password, firstName, lastName, email}.
   * Logs in user and updates context. */
  async function signup(inputValues) {
    const resp = await JoblyApi.signup(inputValues);
    if ('error' in resp) {
      return;
    }
    setToken(resp.token);
    setUser({ username: inputValues.username });
  }

  function logout() {
    setToken(null);
    setUser(null);
  }

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          {user ? <NavBar logout={logout} /> : <AnonNavBar />}
          <RouteList login={login} signup={signup} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
