import React from "react";
import NavBar from "./NavBar";
import HomeBar from "./HomeBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <main>
            <Switch>
              <Route path="/" exact component={HomeBar} />
              <Route path="/about" component={AboutMe} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
