import axios from 'axios';

const API_URL = 'https://promocionalesenlinea.net/api/all-stocks';

export const searchProduct = async (sku) => {
  try {
    const response = await axios.post(API_URL, {
      user: 'GDL3099',
      password: 'NKEwuUIilPPfzNOVzlQu',
      sku: sku
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};