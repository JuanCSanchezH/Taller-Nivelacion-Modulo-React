import axios from 'axios';
const URL_BASE = 'https://miniback-products-taller-refuerzo.onrender.com';

export const getDataFromAPI = async () => {
     try {
        const response = await axios.get(`${URL_BASE}/products`);
        return response.data;
     } catch (error) {
        console.log('error:', error);
        return null;
     }
}