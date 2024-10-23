import { apiRequest } from "../utils";

export const getProduct = async () => {
  const res = await apiRequest({
    method: "GET",
    url: "http://localhost:5000/product",
  });
  return res;
};
export const getSingleProduct = async ({ id }) => {
  const res = await apiRequest({
    method: "GET",
    url: `http://localhost:5000/product/${id}`,
  });
  return res;
};
