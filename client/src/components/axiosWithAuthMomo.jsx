import axios from 'axios';

const axiosWithAuthMomo = () => {
    // const token = localStorage.getItem('token')
    return axios.create({
        headers: {
        "Content-Type": "application/json",
        // Authorization: token
        "Access-Control-Allow-Origin": "*"
        }
    })
}

export default axiosWithAuthMomo;