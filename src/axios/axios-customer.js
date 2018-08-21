import axios from 'axios';


const instance=axios.create({
    baseURL:'http://localhost:8080/api/v1/customers'

});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
