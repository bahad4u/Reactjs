import axios from 'axios'
class admdservice{

executeservice()
{
    return axios.get("http://localhost:8090/hello-world")
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