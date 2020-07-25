import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './component/Navbar';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './component/Home';
import Project from './component/Project';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/"/>
      </Switch>
      <Footer/>
      </>
  );
}

export default App;
