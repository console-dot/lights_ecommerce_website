import { apiRequest } from "../utils";

export const userLogin = async ({ fromdata }) => {
  const res = await apiRequest({
    method: "POST",
    url: "http://localhost:5000/auth/signin",
    data: fromdata,
  });
  return res;
};

export const createUser = async ({ fromdata }) => {
  const res = await apiRequest({
    method: "POST",
    url: "http://localhost:5000/auth/signup",
    data: fromdata,
  });
  return res;
};

export const updateUser = async ({ fromdata, token, id }) => {
  const res = await apiRequest({
    method: "PUT",
    url: `http://localhost:5000/users/${id}`,
    data: fromdata,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

export const getUser = async ({ id, token }) => {
  try {
    const res = await apiRequest({
      method: "GET",
      url: `http://localhost:5000/users/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return { error: 401 }; // Return a specific error code
    } else {
      console.log("API Request Error:", error); // Log API errors
      throw error;
    }
  }
};
export const refreshToken = async ({ token }) => {
  try {
    const res = await apiRequest({
      method: "POST",
      url: `http://localhost:5000/auth/refresh-token`,
      data: { refreshToken: token },
    });
    return res;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return { error: 401 }; // Return a specific error code
    } else {
      console.log("API Request Error:", error); // Log API errors
      throw error;
    }
  }
};
