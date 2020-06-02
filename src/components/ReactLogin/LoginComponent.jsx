import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';
import UserDataService from '../api/UserDataService'
//import Select from 'react-select';
import './Home.css';
//import userdataservice from '../api/userdataservice.js';


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
            id:``,
            data: ``,
            username: ``,
            password: '',
            loginsucces: false,
            loginfailed: false,
            interface: ``,
            loggeduser: false,
            loggeduserinterface: ``

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
    }
    loginClicked() {
        // if (this.state.username === "admin" && this.state.password === "admin") {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //     this.props.history.push(`/config/${this.state.username}`);
        //     this.setState({
        //         loginsucces: true,
        //         loginfailed: false
        //     });

        // //             if(this.state.interface==="Jenkins")
        //             this.props.history.push(`/welcome/${this.state.username}/${this.state.interface}`);
        // else
        // this.props.history.push(`/welcome/${this.state.username}/${this.state.interface}`)
        // this.setState({
        //     loginsucces:true,
        //     loginfailed:false
        // })
        // }
        // else {
        //     this.setState({ loginsucces: false })
        //     this.setState({ loginfailed: true })

        // }



        //     AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        //    .then(
        //         () => {
        //            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //             this.props.history.push(`/config/${this.state.username}`)
        //             this.setState({
        //                 loginsucces: true,
        //                 loginfailed: false
        //             });
        //         }

        //    )
        //    .catch(()=>{
        //     this.setState({ loginsucces: false })
        //     this.setState({ loginfailed: true })
        //    })

        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                UserDataService.retrieveuserdata(this.state.username)
                    .then(response => {
                        console.log(response.data)
                        this.setState({
                            id:response.data.id,
                            loggeduser: response.data.done,
                            loggeduserinterface: response.data.description

                        })
                       
                        if(response.data.message==="N")
                        {
                            console.log("inside if")
                            this.props.history.push(`/config/${this.state.username}`)
                        }else{
                            
                            console.log("inside else")
                

                        if (this.state.loggeduser) {
                            this.props.history.push(`/dashboard/${this.state.loggeduserinterface}`)
                        } 
                        else {
                            console.log("selected id",this.state.id)
                            this.props.history.push(`/config/${this.state.username}/${this.state.id}`)
                            this.setState({
                                loginsucces: true,
                                loginfailed: false
                            });
                        }
                    }

                    })
                 })
            .catch(() => {
                this.setState({ loginsucces: false })
                this.setState({ loginfailed: true })
            })


    }
    render() {
        return (

            <div className="LoginComponents">
                {this.state.loginfailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.loginsucces && <div>Login Sucessful</div>}

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

            </div>

        );
    }
}


