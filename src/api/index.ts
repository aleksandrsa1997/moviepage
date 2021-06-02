import axios from 'axios';
import { urls } from 'src/constants/url';
import { API_KEY } from 'src/constants/api';

export const requestData = async (url: string, params = {}) => {
    return await axios.get(`${urls.BASE_URL}${url}`, { params: {
            api_key: API_KEY,
            ...params
        } }
    )
        .then(res => res.data)
        .catch(error => {throw error})
}
