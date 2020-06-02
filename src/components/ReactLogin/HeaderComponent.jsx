import React, { Component } from 'react';
// eslint-disable-next-line
import { Link, NavLink } from 'react-router-dom';
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
                <div><a href="/" activeStyle={{ fontWeight: 'bold', color: '#a1c935' }} className="navbar-brand">ADMD</a></div>
                <ul className="navbar-nav">

                {isUserLoggedIn &&<li><NavLink to="/home" activeStyle={{ fontWeight: 'bold', color: '#a1c935' }} className="nav-link">Home</NavLink></li>}
                {isUserLoggedIn && <li><NavLink to="/dashboard" activeStyle={{ fontWeight: 'bold', color: '#a1c935'  }} className="nav-link">Dashboard</NavLink></li>}
                {isUserLoggedIn && <li><NavLink to="/config" activeStyle={{ fontWeight: 'bold', color: '#a1c935'  }}   className="nav-link">Configuration</NavLink></li>}

                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">

                    {!isUserLoggedIn && <li><NavLink to="/login" activeStyle={{ fontWeight: 'bold', color: '#a1c935'  }}  className="nav-link">Login</NavLink></li>}
                    {isUserLoggedIn && <li><NavLink to="/logout" activeStyle={{ fontWeight: 'bold', color: '#a1c935'  }}  className="nav-link" onClick={AuthenticationService.logout}>Logout</NavLink></li>}

                </ul>
            </nav>
        </header>
        );
    }
}

export default withRouter(HeaderComponent);