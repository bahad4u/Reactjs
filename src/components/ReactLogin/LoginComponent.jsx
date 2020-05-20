import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';
//import Select from 'react-select';
import './Home.css';


// const Interface=[
//     { label: "Sonar", value: 1 },
//     { label: "Jenkins", value: 2 },
//     { label: "Agile", value: 3 },
//     { label: "Version1", value: 4 },
//     { label: "Splunk", value: 5 },
    
//   ];
export class LoginComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: "abul",
            password: '',
            loginsucces: false,
            loginfailed: false,
            interface:``
           
        };
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
// this.handleInterfaceChange=this.handleInterfaceChange.bind(this);
       // this.handleInterfaceSelected=this.handleInterfaceSelected.bind(this);
    }
    // handleInterfaceSelected() {
    //     if (this.state.interface) {
    //       console.log(this.state.interface);
    //     }
    //   }
    
    //   handleInterfaceChange(e) {
    //     this.setState(
    //         { this.props.interface: e.target.value }
    //         );
    //     console.log(e.target.value)
    //     console.log(this.props.interface)
    //   }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

        console.log(this.state.interface)
    }
    loginClicked() {
        console.log(this.state);
        if (this.state.username === "abul" && this.state.password === "abul") {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/config/${this.state.username}`);
            this.setState({
                  loginsucces:true,
                    loginfailed:false
                });

//             if(this.state.interface==="Jenkins")
//             this.props.history.push(`/welcome/${this.state.username}/${this.state.interface}`);
// else
// this.props.history.push(`/welcome/${this.state.username}/${this.state.interface}`)
            // this.setState({
            //     loginsucces:true,
            //     loginfailed:false
            // })
        }
        else {
            this.setState({
                loginfailed: true,
                loginsucces: false
            });
        }
    }
    render() {
        return (<div className="LoginComponents">
           {this.state.loginfailed && <><div className="alert alert-warning">Invalid Credentials</div></>}
                    {this.state.loginsucces && <div>Login Sucessful</div>}
            <form>        
            Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
            <br></br>
            <br></br>
            Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
            {/* <br></br>
            <br></br>
            Interface:<select name="interface" value={this.state.interface} onChange={this.handleChange} placeholder="Select a Interface">
          <option value="SONAR">SONAR     </option>
          <option value="Jenkins">Jenkins     </option>
          <option value="V1">Version1      </option>
          <option value="Splunk">Splunk       </option>
        </select>
 
                 */}
                
                <br></br>
            <br></br>
            <button onClick={this.loginClicked}>Login</button>
            </form>
        </div>);
    }
}


