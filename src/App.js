import React from 'react';
// import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Class from './Components/Class/Class';
import Class_Description from './Components/Class_Description/Class_Description';
import Price from './Components/Pricing/Price';
import Footer from './Components/Footer/Footer';
import Membership from './Components/Membership/Membership';

function App() {
  return (
    <Router>

      <Header/>
    
      <Switch>
        <Route path='/class'>
          <Class></Class>
        </Route>

        <Route path='/pricing'>
          <Price></Price>
        </Route>

        <Route path='/membership/form/:plan'>
          <Membership></Membership>
        </Route>

        <Route path='/class-description/:pack'>
          <Class_Description></Class_Description>
        </Route>

        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
