import axios from 'axios'
import { JPA_API_URL } from '../ReactLogin/Constants'

class UserDataService {

    retrieveAllTodos(name) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/users`);
    }
    retrieveuserdata(name) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/users/data`);
    }

    retrieveTodo(name, id) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/users/${id}`);
    }

    deleteTodo(name, id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL}/users/${name}/users/${id}`);
    }

    updateUser(name, id, user) {
        //console.log('executed service')
        return axios.put(`${JPA_API_URL}/users/${name}/users/${id}`, user);
    }

    createUser(name, user) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/users/${name}/users/`, user);
    }

}

export default new UserDataService()