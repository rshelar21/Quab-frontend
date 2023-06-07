import axios from "axios";


const instance = axios.create({
    baseURL :  "https://quad-backend.onrender.com"
})

export default instance;