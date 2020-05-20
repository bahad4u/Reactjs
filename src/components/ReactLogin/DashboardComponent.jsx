import React, { Component } from 'react';
import LoadingSpinner from './LoadingSpinner';
export class DashboardComponent extends Component {
    constructor(props){

        
        
        super(props)

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
        const dashboardInterface1 = this.props.configInterface;
       
          this.setState({
             dashboardInterface:dashboardInterface1
          }) ; 
          console.log("dashboard interface",this.state.dashboardInterface)
            }

    render() {
        return (<>
        <div className="DashboardComponent">


            <h1>Welcome to ADMD Dashboard </h1>
            <br></br>
            <p>Under Constructions <LoadingSpinner className="">{this.state.dashboardInterface}</LoadingSpinner></p>

        </div>
        </>
        );
    }
}
