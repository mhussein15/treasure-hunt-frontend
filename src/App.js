import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import RandomList from "./components/RandomList";
import TreasureList from "./components/TreasureList";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/random">
          <RandomList />
        </Route>
        <Route exact path="/treasure">
          <TreasureList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
