import {axiosWithAuth} from '../utils/axiosWithAuth'
 
export default function fetchBuggles() {
    return axiosWithAuth().get('/api/colors')
    .then( resp => {debugger;return resp})
    .catch( error => {debugger;return error})
}
