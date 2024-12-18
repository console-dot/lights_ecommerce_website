import { apiRequest } from "../utils";

export const createCarts = async ({ cartData, token }) => {
  try {
    const res = await apiRequest({
      method: "POST",
      url: "http://localhost:5000/cart",
      data: cartData,
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {
   console.log(error)
  }
};
export const getCarts = async ({ id }) => {
  const res = await apiRequest({
    method: "GET",
    url: `http://localhost:5000/cart/${id}`,
  });
  return res;
};
export const deleteCarts = async ({ cartData, token }) => {
  try {
    const res = await apiRequest({
      method: "DELETE",
      url: `http://localhost:5000/cart`,
      data: cartData,
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch(error) {
    if (error.response && error.response.status === 401) {
      return { error: 401 }; 
    } else {
      console.log("API Request Error:", error);
      throw error;
    }
  }
};
