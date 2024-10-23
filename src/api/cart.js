import { apiRequest } from "../utils";

export const createCarts = async ({ cartData, token }) => {
  const res = await apiRequest({
    method: "POST",
    url: "http://localhost:5000/cart",
    data: cartData,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const getCarts = async ({ id }) => {
  const res = await apiRequest({
    method: "GET",
    url: `http://localhost:5000/cart/${id}`,
    // headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const deleteCarts = async ({ cartData, token }) => {
  const res = await apiRequest({
    method: "DELETE",
    url: `http://localhost:5000/cart`,
    data: cartData,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
