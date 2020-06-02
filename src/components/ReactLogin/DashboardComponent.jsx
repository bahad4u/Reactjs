import React, { Component } from 'react';
//import LoadingSpinner from './LoadingSpinner';
import JenkinsList from '../interface/JenkinsList';
//const {dashboardInterface1} = this.props.location.state
export class DashboardComponent extends Component {
    constructor(props){

        
        super(props)
       // let c=  this.props.location.state

        this.state={
            dashboardInterface :``
        };
        this.setInterface=this.setInterface.bind(this);
    }

    setInterface(){
console.log("inside setinterafce");
    }
    componentDidMount() {
        // `newBugs`constant holds the bugs passed down from IndexPage
       
      
          this.setState({
             dashboardInterface:this.props.match.params.interface
           }) ; 
          
            }

    render() {
       // const {dashboardInterface1} = this.state
        console.log("dashboard interface",this.props.match.params.interface)
        return (<>
        <div className="DashboardComponent">
           {this.state.dashboardInterface==="Jenkins" && <JenkinsList />}
          
            {/* <h1>Welcome to ADMD Dashboard </h1>
            <br></br>
            <p>Under Constructions <LoadingSpinner className="">{this.state.dashboardInterface}</LoadingSpinner></p> */}

        </div>
        </>
        );
    }
}
