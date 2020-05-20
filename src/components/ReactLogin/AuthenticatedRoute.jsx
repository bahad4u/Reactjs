import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
<<<<<<< HEAD
            return this.newMethod()
=======
            return <Route {...this.props} />
>>>>>>> 1e276f1a9effd5aafd01b9f72374aaa100cfafbc
        } else {
            return <Redirect to="/login" />
        }

    }
<<<<<<< HEAD

    newMethod() {
        return <Route {...this.props} />
    }
}

export default AuthenticatedRoute;
=======
}

export default AuthenticatedRoute
>>>>>>> 1e276f1a9effd5aafd01b9f72374aaa100cfafbc
