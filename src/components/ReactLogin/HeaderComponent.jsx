import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import {withRouter} from 'react-router';
import "./bootstrap.css"
class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);
        return (
            
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="/" className="navbar-brand">ADMD</a></div>
                <ul className="navbar-nav">

<<<<<<< HEAD
                {isUserLoggedIn &&<li><Link to="/home" className="nav-link">Home</Link></li>}
                {isUserLoggedIn && <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>}
                {isUserLoggedIn && <li><Link to="/config" className="nav-link">Configuration</Link></li>}
=======
                {isUserLoggedIn &&<li><Link to="/welcome" className="nav-link">Home</Link></li>}
                {isUserLoggedIn && <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>}
>>>>>>> 1e276f1a9effd5aafd01b9f72374aaa100cfafbc

                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">

                    {!isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                    {isUserLoggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>}

                </ul>
            </nav>
        </header>
        );
    }
}

export default withRouter(HeaderComponent);