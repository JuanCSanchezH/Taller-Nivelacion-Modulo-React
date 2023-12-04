import axios from 'axios';
import endpoints from './endpoints';

export const getDataFromAPI = async () => {
     try {
        const response = await axios.get(endpoints.products);
        return response.data;
     } catch (error) {
        console.log('error:', error);
        return null;
     }
}

export const getProductById = async (id) => {
   try {
      const response = await axios.get(endpoints.productById(id));
      return response.data;
   } catch (error) {
      console.log('error:', error);
      return null;
   }
}