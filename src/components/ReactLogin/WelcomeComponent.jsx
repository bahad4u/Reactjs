import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import admdservice from '../api/admdservice';
//import { JsonToTable } from "react-json-to-table";

// const  Client6 = require('es6')

     
export class WelcomeComponent extends Component {
constructor(props){
    super(props)
    
    // Client6 = new Client6({
    //     node: 'http://localhost:9200' })

    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage : '',
            responseData: []   
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
                    {this.state.welcomeMessage}</div>
                {/* </div>
                {this.state.responseData && <div>{this.state.responseData}
                      </div> */}
    

               {/* {this.state.responseData && <div>
            {this.state.responseData.hits.hits.map(({_source:{name,description}})=>({name,description}))
             
             
            //  <div key={index}>
            //     {hit._source.name}: {hit._source.description}
            //   </div>))
            }
          </div>} */}
            
        </>);
    }
   
    
    retrieveWelcomeMessage = async ()=>{
        // admdservice.executeservicepath()
        // .then(response => console.log(response))
        // //.catch()
       
        admdservice.executeESservice()
        .then((response)=>{
            console.log("--- Response ---");
                // console.log(response);
                console.log("--- Hits ---")
                // this.setState({
                // responseData: response.data            })
                console.log(response.data.hits.hits)
                var jsononject= JSON.stringify(response.data.hits.hits)
                 console.log(jsononject)
                 

            // response.data.hits.hits.forEach(function (hit) {
            //     console.log(hit._source.service)
            //     this.setState(
            //         {
            //             responseData: hit._source.service
            //         }
            //     )
            // }).bind(this)
                 }
                )
                }

// console.log(response)
// console.log(response.data)
// console.log(response.data.getenvironment)
// const res = response.data.hits.hits
// this.setState({
//     responseData:response.data.hits.hits
// })

// // .map(({_source:{name,description}})=>({name,description}));
// console.log("before json",res)
// const myObjStr =this.state.responseData;
// console.log("after",myObjStr);

    

        // admdservice.executeHelloWorldPathVariableService(this.props.match.params.interface)
        // .then( response => this.handleSuccessfulResponse(response) )
        // .catch( error => this.handleError(error) )


    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
    }
    handleError(error) {
        console.log(error.response)
        this.setState({welcomeMessage: error.response.data.message})
    }
}
