import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import admdservice from '../api/admdservice';
export class WelcomeComponent extends Component {
constructor(props){
    super(props)

    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage : ''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
}
   
    render() {
        return ( <>
            <h1>Welcome!</h1>
            <div className="container">
            Welcome {this.props.match.params.name} You can manage your Dashboard <Link to="/dashboard">here</Link>.
     
            you have selected<Link to="/Jenkins">{this.props.match.params.interface}</Link> {this.props.match.params.interface}
            </div>
            <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} 
                        className="btn btn-success">Get Welcome Message</button>
                </div>

                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            
        </>);
    }

    retrieveWelcomeMessage(){
        // admdservice.executeservicepath()
        // .then(response => console.log(response))
        // //.catch()

        admdservice.executeHelloWorldPathVariableService(this.props.match.params.interface)
        .then( response => this.handleSuccessfulResponse(response) )
        .catch( error => this.handleError(error) )
    }

    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
    }
    handleError(error) {
        console.log(error.response)
        this.setState({welcomeMessage: error.response.data.message})
    }
}
