import { BrowserRouter } from "react-router-dom";
import NavBar from "./common/NavBar";
import RouteList from "./common/RouteList";
import userContext from "./user/userContext";
import LoadingScreen from "./common/LoadingScreen";
import useAuth from "./hooks/useAuth";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 * App -> {Nav, RouteList}
 */

function App() {
  console.log("in rendering App");
  const { user, login, signup, update, logout, token, applyToJob } = useAuth("token");

  if (token && !user) return <LoadingScreen />;

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <NavBar logout={logout} />
          <div className="pb-3">
            <RouteList login={login} signup={signup} updateUser={update} applyToJob={applyToJob} />
          </div>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
