import React, { Component } from 'react';
import ReactLoginApp from './components/ReactLogin/ReactLoginApp'
//import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======
>>>>>>> 1e276f1a9effd5aafd01b9f72374aaa100cfafbc

//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import { Navbar, Nav, NavItem } from "react-bootstrap";

 
class App extends Component {
  render() {
    return (

      <div className="App">
{/* 
       
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
          <Navbar.Collapse>
          <Nav pullLeft>

          <NavItem href="/"> ADMD Home </NavItem>
          </Nav>
          </Navbar.Collapse>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            
            <NavItem href="/login">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      

      {/*<Route path="/" component={ReactLoginApp} />*/}
<ReactLoginApp />
     
      </div>
    );
  }
}



export default App;