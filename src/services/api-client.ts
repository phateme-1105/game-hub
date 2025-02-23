import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'a4aff853b26d487f9e6eb02435ccbec4'
    }
})