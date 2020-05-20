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
<<<<<<< HEAD
import  {DashboardComponent} from './DashboardComponent.jsx';
import {ConfigComponent} from  './ConfigComponent';
import { ErrorComponent } from './ErrorComponent';
import { LogoutComponent } from './LogoutComponent';
import  JenkinsList  from '../interface/JenkinsList.jsx';
=======
import { DashboardComponent } from './DashboardComponent';
import { ErrorComponent } from './ErrorComponent';
import { LogoutComponent } from './LogoutComponent';
>>>>>>> 1e276f1a9effd5aafd01b9f72374aaa100cfafbc

class ReactLoginApp extends Component{
    render(){
        return(
            <div className="ReactLoginApp">
            
             <Router>
                 <>
                 <HeaderComponent />
                
                <Switch>
<<<<<<< HEAD
                <Route path="/" exact component={Home}></Route>
                <Route path="/home" exact component={Home}></Route>
                <Route path="/login" component={LoginComponent}></Route>
                <AuthenticatedRoute path="/welcome/:name/:interface" component={WelcomeComponent}></AuthenticatedRoute>
                <AuthenticatedRoute path="/dashboard" component={DashboardComponent}></AuthenticatedRoute>
                <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
                <AuthenticatedRoute path="/Jenkins" component={JenkinsList}></AuthenticatedRoute>
                <AuthenticatedRoute path="/config/:name" component={ConfigComponent}></AuthenticatedRoute>
                <AuthenticatedRoute path="/config" component={ConfigComponent}></AuthenticatedRoute>
                
=======
                
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" component={LoginComponent}></Route>
                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                <AuthenticatedRoute path="/dashboard" component={DashboardComponent}></AuthenticatedRoute>
                <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
>>>>>>> 1e276f1a9effd5aafd01b9f72374aaa100cfafbc
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