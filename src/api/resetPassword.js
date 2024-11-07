import { apiRequest } from "../utils";

export const forgetPassword = async ({ fromdata }) => {
  const res = await apiRequest({
    method: "POST",
    url: "http://localhost:5000/mail/send",
    data: fromdata,
  });
  return res;
};
export const resetPasswordFun = async ({ fromdata }) => {
  const res = await apiRequest({
    method: "POST",
    url: "http://localhost:5000/mail/reset-password",
    data: fromdata,
  });
  return res;
};