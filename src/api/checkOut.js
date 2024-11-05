import { apiRequest } from "../utils";

export const createCheckOut = async ({ fromdata, token }) => {
  const res = await apiRequest({
    method: "POST",
    url: "http://localhost:5000/checkout",
    data: fromdata,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const getCheckOut = async () => {
  const res = await apiRequest({
    method: "GET",
    url: "http://localhost:5000/checkout",
  });
  return res;
};
export const getCheckOutByID = async ({id}) => {
  const res = await apiRequest({
    method: "GET",
    url: `http://localhost:5000/checkout/${id}`,
  });
  return res;
};
