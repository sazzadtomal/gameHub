import axios from "axios";




export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'7624c0a0fa954155a00d531785d7b816'
    }
})