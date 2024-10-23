import { apiRequest } from "../utils";

export const getCategoryCardDesign= async () => {
  const res = await apiRequest({
    method: "GET",
    url: "http://localhost:5000/categoryCardDesign",
    // data: fromdata,
  });
  return res;
};
