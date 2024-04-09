import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import RouteList from "./RouteList";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 * App -> {Nav, RouteList}
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
