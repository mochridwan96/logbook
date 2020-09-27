import axios from "axios";
// import Nprogress from "nprogress";
const $axios = axios.create({
    baseURL: "/api/v1",
    headers: {
        // Authorization: localStorage.getItem('token') != 'null' ? 'Bearer ' + localStorage.getItem('token'):'',
        "Content-Type": "application/json"
    }
});

// $axios.interceptors.request.use(config => {
//     Nprogress.start();
//     return config;
// });
//
// $axios.interceptors.response.use(response => {
//     Nprogress.done();
//     return response;
// });

// $axios.interceptors.request.use(
//     function(config) {
//         const token = store.state.token;
//         if (token) config.headers.Authorization = `Bearer ${token}`;
//         return config;
//     },
//     function(error) {
//         return Promise.reject(error);
//     }
// );

export default $axios;
