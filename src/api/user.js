import { apiRequest } from "../utils";

export const userLogin = async ({ fromdata }) => {
  const res = await apiRequest({
    method: "POST",
    url: "http://localhost:5000/auth/signin",
    data: fromdata,
  });
  return res;
};
export const getUser = async ({ id, token }) => {
  const res = await apiRequest({
    method: "GET",
    url: `http://localhost:5000/users/${id}`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
