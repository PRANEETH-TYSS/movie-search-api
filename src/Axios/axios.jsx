import axios from "axios";
export default axios.create({
    baseURL:"https://www.omdbapi.com/?s=man&apikey=4a3b711b"
})