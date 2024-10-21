import { apiRequest } from "../utils";

export const getProductCategory = async () => {
  const res = await apiRequest({
    method: "GET",
    url: "http://localhost:5000/category",
    // data: fromdata,
  });
  console.log(res);
  return res;
};
