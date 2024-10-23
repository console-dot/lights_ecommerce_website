import { apiRequest } from "../utils";

export const getDecorate = async () => {
  const res = await apiRequest({
    method: "GET",
    url: "http://localhost:5000/decorateLight",
    // data: fromdata,
  });
  return res;
};
