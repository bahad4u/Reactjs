import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class WelcomeComponent extends Component {
    render() {
        return ( <>
            <h1>Welcome!</h1>
            <div className="container">
            Welcome {this.props.match.params.name} You can manage your Dashboard <Link to="/dashboard">here</Link>.
            </div>
        </>);
    }
}
