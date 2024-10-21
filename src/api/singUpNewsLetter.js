import { apiRequest } from "../utils";

export const getSignUpNewsLetter = async () => {
  const res = await apiRequest({
    method: "GET",
    url: "http://localhost:5000/signUpNewLetter",
  });
  console.log(res);
  return res;
};
