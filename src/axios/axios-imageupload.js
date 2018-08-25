import axios from 'axios';
import * as axiosType from './axios-public';

const instance=axios.create({
    baseURL:axiosType.PUBLIC_URL+'/api/v1/upload'

});

instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';

export default instance;