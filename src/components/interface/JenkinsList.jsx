import React from 'react';
//import FilterableTable from 'react-filterable-table';
import './dashboard.css';
//import '../ReactLogin/bootstrap.css';
import JenkinsData from '../data/jenkins.json'
import ChartList from './ChartList.js'
//import buttonF from './button_blue_first.png'

/* eslint-disable */
function JenkinsList(){
	
const FilterableTable = require('react-filterable-table');

const data =	JenkinsData;

// Fields to show in the table, and what object properties in the data they bind to
const fields = [
    { name: 'buildNo', displayName: "Build No", inputFilterable: true, exactFilterable: false, sortable: true },
    { name: 'status', displayName: "Status", inputFilterable: true, exactFilterable: false, sortable: true },
	{ name: 'service', displayName: "Service", inputFilterable: true, exactFilterable: false, sortable: true },
    { name: 'environment', displayName: "Environment", inputFilterable: true, exactFilterable: false, sortable: true },
    { name: 'url', displayName: "URL", inputFilterable: false, exactFilterable: false, sortable: true },

 
];
  return (
  <div className="container">
	  <h1>Jenkins Dashboard</h1>
<FilterableTable
	namespace="filterabletable"
	displayName ="Filter"
    initialSort="id"
    data={data}
    fields={fields}
	autofocusFilter ="true"
	emptyDisplay ="hello"
	pagerTopClassName="changepageup"
	recordCountName ="record found"
	recordCountNamePlural= "records found"
	pagerBottomClassName="changepagedown"
	pagerTitles={{ first: "<", last: ">" , next:''}}
    noRecordsMessage="There are no records to display"
    noFilteredRecordsMessage="No data matches with the filters!" />
	<br></br>
	<br></br>

	<br></br>

	<br></br>
<ChartList></ChartList>
	</div>);

}

export default JenkinsList;


