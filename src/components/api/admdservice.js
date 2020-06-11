import axios from 'axios'
class admdservice{

executeservice()
{
    return axios.get("http://localhost:8090/hello-world")
}

executeESservice = async() =>
{
    var config = {
    headers: {'Access-Control-Allow-Origin': `*` ,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
              'Access-Control-Allow-Methods':'GET, OPTIONS, POST'
              }
  };
//   const query = JSON.stringify({
//     query: {
//         "inner_hits": {
//             "_source": [
//                   "service",
//                   "project",
//                   "sprint",
//                   "status" 
//             ]
//         }
//     }
//   });
  let result = await axios.get("http://138.12.30.137:9200/jenkins*/_search?filter_path=hits.hits._source",config) 
    
    return  result
    // {
    //     data: JSON.stringify(query),
    //   })
}

executeservicepath()
{
    return axios.get("http://localhost:8090/hello-world-bean")
}
executeHelloWorldPathVariableService(name) {
    //console.log('executed service')
    return axios.get(`http://localhost:8009/hello-world/path-variable/${name}`);        
}
}

export default new admdservice();