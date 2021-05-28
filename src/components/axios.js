import axios from 'axios'
import {baseurl} from './constants/contant'


// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: baseurl
});

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default instance