import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Saved from "./components/Saved/Saved";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          {/* <Route exact path="/books" component={Search} />
          <Route exact path="/books/:id" component={Saved} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
