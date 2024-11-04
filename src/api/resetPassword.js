import { apiRequest } from "../utils";

export const forgetPassword = async ({ fromdata }) => {
  const res = await apiRequest({
    method: "POST",
    url: "http://localhost:5000/email/reset-password",
    data: fromdata,
  });
  return res;
};