import axios from 'axios';

const instance=axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    headers: {'Content-Type': 'application/json'}
});

instance.interceptors.request.use((config)=>{
    config.url=`${config.url}?key=AIzaSyDY-t0u4a0qswzOea8Ui5q9NVmuHHg62PI`

    return config;
})

export default instance;