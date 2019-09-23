import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
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
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
