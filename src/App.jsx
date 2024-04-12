import { BrowserRouter } from "react-router-dom";
import NavBar from "./common/NavBar";
import RouteList from "./common/RouteList";
import userContext from "./user/userContext";
// import { useEffect, useState } from "react";
// import JoblyApi from "./api/api";
// import { jwtDecode } from "jwt-decode";
// import { getLocalUser, setLocalUser } from "./common/utils";
import LoadingScreen from "./common/LoadingScreen";
// import useLocalStorage from "./useLocalStorage";
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
  const { user, login, signup, update, logout, token, applyToJob } = useAuth(null);

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

// function App() {
//   console.log("in rendering App");
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useLocalStorage();

//   useEffect(
//     function setUserOnTokenChange() {
//       async function updateUser() {
//         if (token) {
//           JoblyApi.token = token;
//           const { username } = jwtDecode(token);
//           const userData = await JoblyApi.getUser(username);
//           setUser({
//             username: userData.username,
//             firstName: userData.firstName,
//             lastName: userData.lastName,
//             email: userData.email,
//             jobs: userData.jobs,
//             isAdmin: userData.isAdmin,
//           });
//         } else {
//           setUser(null);
//           JoblyApi.token = null;
//         }
//       }
//       updateUser();
//     },
//     [token]
//   );

//   /** Takes username and password. Logs in user and updates context. */
//   async function login(username, password) {
//     const resp = await JoblyApi.login(username, password);
//     setToken(resp.token);
//   }

//   /** Takes object like {username, password, firstName, lastName, email}.
//    * Logs in user and updates context. */
//   async function signup(inputValues) {
//     const resp = await JoblyApi.signup(inputValues);
//     setToken(resp.token);
//   }

//   /** Clears all context and state data about user */
//   function logout() {
//     setToken(null);
//   }

//   /** Updates user with new info. Takes object like {username, firstName, lastName, email}. */
//   async function updateUser(data) {
//     const updatedData = await JoblyApi.updateUser(data);
//     setUser((user) => ({
//       ...user,
//       ...updatedData,
//     }));
//   }

//   // return <LoadingScreen />;
//   if (token && !user) return <LoadingScreen />;

//   return (
//     <div className="App">
//       <userContext.Provider value={{ user }}>
//         <BrowserRouter>
//           <NavBar logout={logout} />
//           <RouteList login={login} signup={signup} updateUser={updateUser} />
//         </BrowserRouter>
//       </userContext.Provider>
//     </div>
//   );
// }

export default App;
