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
