import axios from 'axios';


const instance=axios.create({
    baseURL:'https://diamot-web.azurewebsites.net/Admin/'

});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
