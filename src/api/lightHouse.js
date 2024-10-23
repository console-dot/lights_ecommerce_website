import { apiRequest } from "../utils";

export const getLightHouse = async () => {
  const res = await apiRequest({
    method: "GET",
    url: "http://localhost:5000/lightHouse",
    // data: fromdata,
  });
  return res;
};
