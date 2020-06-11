import React from 'react';
import {Pie} from 'react-chartjs-2';
import JenkinsData from '../data/jenkins.json'


function ChartList(){
  var a=0,b=0;
  // eslint-disable-next-line
	{JenkinsData.map((jenkindetails,index)=>{
		 		 if(jenkindetails.status==="SUCCESS"){
					 a=a+1;
				 }
				 if(jenkindetails.status==="FAILURE"){
					 b=b+1;
				 }	 
	 })}
	
	const state = {
  labels: ['Success', 'Failure'],
  datasets: [
    {
      label: 'Build Status',
      backgroundColor: [
        '#25de00',
        '#ff0f0f'        
      ],
      hoverBackgroundColor: [
      '#1c9e02',
      '#a30202'
      ],
      data: [a, b],
    }
  ]
}
 return (
      <div align="left">
        <Pie width="50" height="10"
          data={state}
		options={{
      
			maintainAspectRatio: true,
            title:{
              display:true,
              text:'Jenkins Job Build Status',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />        
      </div>
    );
}

export default ChartList;