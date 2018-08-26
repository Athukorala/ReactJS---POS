import axios from 'axios';
import * as axiosPublic from './axios-public';

const instance=axios.create({
    baseURL:axiosPublic.PUBLIC_URL+'/api/v1/'

});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
