import axios from 'axios';

const API_URL ='http://localhost:8085/listars';

export const getAllSeguros = async () => {
    const response = await axios.get(API_URL);
    return  response.data;

}