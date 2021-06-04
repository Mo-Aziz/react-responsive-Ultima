import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Footer } from "./components";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
