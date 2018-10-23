import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Boats from "./pages/Boats";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import { Grid } from "react-bootstrap";
import Wrapper from "./components/Wrapper"
import { Container } from './components/Grid';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGhost } from '@fortawesome/free-solid-svg-icons'

// library.add(faGhost)

// class App extends Component {
//   state = {
//     response: ''

//   };

//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();

//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   };

const App = () => (

  // render() {
  //   return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       {/* Edit <code>src/App.js</code> and save to reload. */}
      //       {this.state.response}
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
  <Router> 
    <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/boats" component={Boats} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
        {/* <Footer /> */}
      </div>
  </Router>
);


export default App;

