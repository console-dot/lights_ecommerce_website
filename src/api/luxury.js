import { apiRequest } from "../utils";

export const getLuxury = async () => {
  const res = await apiRequest({
    method: "GET",
    url: "http://localhost:5000/luxury",
    // data: fromdata,
  });
  console.log(res);
  return res;
};
