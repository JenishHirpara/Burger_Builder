import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3fcdc.firebaseio.com/'
});

export default instance;