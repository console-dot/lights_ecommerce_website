import { apiRequest } from "../utils";

export const createCarts = async ({ cartData, token }) => {
  const res = await apiRequest({
    method: "POST",
    url: "http://localhost:5000/cart",
    data: cartData,
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(res);
  return res;
};
