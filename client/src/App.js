import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Boats from "./pages/Boats";
// import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGhost } from '@fortawesome/free-solid-svg-icons'

// library.add(faGhost)

const App = () => (
  <Router> 
    <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/boats" component={Boats} />
          <Route exact path="/about" component={About} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
  </Router>
);

export default App;

