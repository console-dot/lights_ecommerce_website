import { apiRequest } from "../utils";

export const getBlogs = async () => {
  const res = await apiRequest({
    method: "GET",
    url: "http://localhost:5000/blogs",
    // data: fromdata,
  });
  console.log(res);
  return res;
};
