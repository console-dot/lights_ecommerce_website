import { apiRequest } from "../utils";

export const getBanner = async () => {
  const res = await apiRequest({
    method: "GET",
    url: "http://localhost:5000/banner",
    // data: fromdata,
  });
  console.log(res);
  return res;
};
