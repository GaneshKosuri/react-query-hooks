import { Route, Switch } from "react-router-dom";

import ReactQueryUsersList from "./components/ReactQueryUsersList";
import Home from "./components/Home";
import TraditionalUsersList from "./components/TraditionalUsersList";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/traditional" component={TraditionalUsersList} />
    <Route exact path="/react-query" component={ReactQueryUsersList} />
  </Switch>
);

export default App;
