import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Photography from "./pages/Photography";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" render={props => <Home {...props} />} />
              <Route
                exact
                path="/about"
                render={props => <About {...props} />}
              />
              <Route
                exact
                path="/projects"
                render={props => <Projects {...props} />}
              />
              <Route
                exact
                path="/photography"
                render={props => <Photography {...props} />}
              />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
