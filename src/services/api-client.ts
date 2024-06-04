import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '12ee1baa05784c08a79d00e70b874c90'
    }
});