import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import Add from "./routes/Add";
import Done from "./routes/Done";
import Navigator from "./components/Navigator";

function App() {
  return (
    <HashRouter>
      <Navigator />
      <Route path="/" exact={true} component={Home} />
      <Route path="/add" component={Add} />
      <Route path="/done" component={Done} />
    </HashRouter>
  );
}

export default App;
