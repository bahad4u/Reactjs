import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return this.newMethod()
        } else {
            return <Redirect to="/login" />
        }

    }

    newMethod() {
        return <Route {...this.props} />
    }
}

export default AuthenticatedRoute;