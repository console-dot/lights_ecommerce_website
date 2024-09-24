import axios from "axios";

export const apiRequest = async ({ method, url, data = {}, headers = {}, params = {} }) => {
    try {
      const response = await axios({
        method,
        url,
        data,
        headers,
        params,
      });
      return response.data;
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  };