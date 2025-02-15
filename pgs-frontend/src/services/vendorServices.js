import axios from 'axios';

const API_URL = 'http://localhost:8080/api/vendors';

export const getAllVendors = async ()=> {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching vendors:", error);
        throw error;
    }
}