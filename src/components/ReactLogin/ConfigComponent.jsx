import React, { Component } from 'react';
import admdservice from '../api/admdservice';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner'
import UserDataService from '../api/UserDataService';
import './bootstrap.css';
//import { DashboardComponent } from './DashboardComponent';
//import  DashboardComponent  from './DashboardComponent.jsx';

// const Interface=[
//     { label: "Sonar", value: 1 },
//     { label: "Jenkins", value: 2 },
//     { label: "Agile", value: 3 },
//     { label: "Version1", value: 4 },
//     { label: "Splunk", value: 5 },

//   ];
/* eslint-disable */
export class ConfigComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            welcomeMessage : '',
            interface: ``,
            loading:false,
            incorrect:"hello selected incorrect",
            username:this.props.match.params.name
        

        };
        this.handleChange = this.handleChange.bind(this);
        this.submitClicked = this.submitClicked.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleError = this.handleError.bind(this);
       
        // this.handleInterfaceChange=this.handleInterfaceChange.bind(this);
        // this.handleInterfaceSelected=this.handleInterfaceSelected.bind(this);
    }
    
   
    handleChange(event) {
        this.setState({
            interface: event.target.value
        });
        console.log(this.state.interface)
       
    }
    submitClicked= () => {
        let user = {
        id:this.state.id,
        message:`y`,
            username:this.state.username,
            description: this.state.interface,
            done:true

        }
        console.log(this.state);
      //(<DashboardComponent configInterface={this.state.interface}/>)
        this.setState({ loading: true }, () => {
        admdservice.executeHelloWorldPathVariableService(this.state.interface)
        .then(
                  
            (response )=>{ this.setState({
                loading: false,
                welcomeMessage: response.data.message
                
            })
console.log(user)

if (this.state.id === "null") {
    UserDataService.createUser(this.state.username,user)
        .then((response) => {
            console.log(response.data)
        })
} else {
    UserDataService.updateUser(this.state.username,this.state.id,user)
        .then((response) => {
            console.log(response.data)
        })
}

            // UserDataService.updateUser(this.state.username,this.state.id,user)
            //         .then(response => {
            //             console.log(response.data)
            //         })
            
                 } )
            .catch(
                error => this.handleError(error)
            )
        });
        // if(!this.state.loading && this.state.interface==="Jenkins")
        //             this.props.history.push(`/Jenkins`);
        // 
        //.catch( error => this.handleError(error) )

        //         if (this.state.username === "abul" && this.state.password === "abul") {
        //             AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //             if(this.state.interface==="Jenkins")
        //             this.props.history.push(`/welcome/${this.state.username}/${this.state.interface}`);
        // else
        // this.props.history.push(`/welcome/${this.state.username}/${this.state.interface}`)
        //             // this.setState({
        //             //     loginsucces:true,
        //             //     loginfailed:false
        //             // })
        //         }
        //         else {
        //             this.setState({
        //                 loginfailed: true,
        //                 loginsucces: false
        //             });
        //         }
    }
    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
    }
    handleError(error) {
        console.log(error.response)
        let errorMessage = '';
        if (error.message)
            errorMessage += error.message
        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }
        this.setState({ welcomeMessage: errorMessage })
    
    }
    render() {
       
        return (
            <>
            <div className="container">
           {/* {!this.state.id && <b> Welcome {this.props.match.params.name}</b>} */}
           
           <br></br>
           <br></br>
           <br></br>
           <p>	Please choose the metrics to Configure</p>
         
                    
                    <select name="interface" value={this.state.interface} onChange={this.handleChange} >
                        <option default>Select</option>
                        <option value="SONAR">Code Quality     </option>
                        <option value="Jenkins">DevOps     </option>
                        <option value="V1_VELOCITY_METRICS">Agile       </option>
                    </select>



                    <br></br>
                    <br></br>
                    <br></br>
                   <br></br>
            
                    <button onClick={this.submitClicked}>Submit</button>
             
            </div>

<div className="container">
    <br></br>
{this.state.loading ? <LoadingSpinner />  :<Link to={`/dashboard/${this.state.interface}`}>{this.state.welcomeMessage}</Link>}



<br></br>
                   
                  
                  
</div>


{/* <div className="container">
    <br></br>
{(this.state.interface === "Jenkins" )? (this.state.loading && this.props.history.push(`/Jenkins`)): this.state.incorrect }

</div> */}
</>


        );
    }
}
