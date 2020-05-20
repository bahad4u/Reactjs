import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js'

export class LogoutComponent extends Component {
    render() 
    {
        AuthenticationService.logout();
        return ( <>
            <h1>You are logged out</h1>
            <div className="container">
                Thank You for Using Our Application.
            </div>
        </>)
    }
}
