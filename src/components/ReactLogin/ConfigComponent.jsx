import React, { Component } from 'react';
import admdservice from '../api/admdservice';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner'
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
            welcomeMessage : '',
            interface: ``,
            loading:false,
            incorrect:"hello selected incorrect"
        

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
            [event.target.name]: event.target.value
        });
        console.log(this.state.interface)
       
    }
    submitClicked= () => {
        console.log(this.state);
      //(<DashboardComponent configInterface={this.state.interface}/>)
        this.setState({ loading: true }, () => {
        admdservice.executeHelloWorldPathVariableService(this.state.interface)
        .then(
                  
            response => this.setState({
                loading: false,
                welcomeMessage: response.data.message,
                
            }));
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
        this.setState({welcomeMessage: error.response.data.message})
    }
    render() {
       
        return (
            <>
            <div className="container">
           <b> Welcome {this.props.match.params.name}</b>
           
           <br></br>
           <br></br>
           <br></br>
           <p>Please select the Interface </p>
         
                    
                    <select name="interface" value={this.state.interface} onChange={this.handleChange} placeholder="Select a Interface">
                        <option value="SONAR">SONAR     </option>
                        <option value="Jenkins">Jenkins     </option>
                        <option value="V1">Version1      </option>
                        <option value="Splunk">Splunk       </option>
                    </select>



                    <br></br>
                    <br></br>
                    <br></br>
                   <br></br>
            
                    <button onClick={this.submitClicked}>Submit</button>
             
            </div>

<div className="container">
    <br></br>
{this.state.loading ? <LoadingSpinner />  : <Link to="/Jenkins">{this.state.welcomeMessage}</Link>}



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
