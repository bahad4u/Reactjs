import React, { Component } from 'react';
import './Home.css';
export class Home extends Component {
    render() {
         return (
<div className="Home">
            <div className="lander">
            
            <h4>ADMD</h4>
            <p>Agile Delivery Metrics Dashboard (ADMD) is a one stop solution where developer and management can check for all 
                Agile, Code Quality and DevOps metrics
            </p>
            <h4>Benefits</h4>
            <p>ADMD integrates with multiple data providers such as Version One, JIRA, SONAR, Jenkins and configured to pull data in scheduled timings.
                Dashboards can be viewed at sprint, Release, Team and Program level by developers and management.
                It can be reused across any kindy of Agile/Devops project.
            </p>
            <h4>Metrics Supported</h4>
            <p>ADMD tool supports following dashboards/Metrics
            <ul>
                <li>Sonar Dashboard</li>
                <li>Burndown Dashboard</li>
                <li>DevOps Dashboard</li>
                <li>Regression Test Defects Dashboard</li>
                <li>Infra Build Dashboard</li>
            </ul>
            </p>
            <h4>ADMD Enhancements</h4>
            <p>As part of the ADMD enhancement, It has Authentication, Configuration using latest technologies Spring Boot and React JS.
                Configuration has facility to select the desired interface based on the teams requirement.
                ADMD access has restricted to access only the authenticated users. we are planning to implement LDAP authentication in future release.
            </p>
        </div>
</div>
         //<div className="Home">
        //     <div className="lander">
        //         <h1>ADMD Home</h1>
        //         <p>Welcome to ADMD Home Page   </p>
        //     </div>
        // </div>
        );
    }
}

export default Home;
