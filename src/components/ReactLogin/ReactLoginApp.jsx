import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./Home.css";
import "./bootstrap.css"
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import { LoginComponent } from './LoginComponent'
import  HeaderComponent  from './HeaderComponent';
import { FooterComponent } from './FooterComponent';
import { Home } from './Home';
import { WelcomeComponent } from './WelcomeComponent';
import { DashboardComponent } from './DashboardComponent';
import { ErrorComponent } from './ErrorComponent';
import { LogoutComponent } from './LogoutComponent';

class ReactLoginApp extends Component{
    render(){
        return(
            <div className="ReactLoginApp">
            
             <Router>
                 <>
                 <HeaderComponent />
                
                <Switch>
                
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" component={LoginComponent}></Route>
                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                <AuthenticatedRoute path="/dashboard" component={DashboardComponent}></AuthenticatedRoute>
                <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
                <Route  component={ErrorComponent}></Route>
               
                </Switch>
                
                <FooterComponent />
               </>
                
                
            </Router>
            
            </div>
           
        )
    }



}

export default ReactLoginApp;