import { apiRequest } from "../utils";

export const getDiscounteOffer = async () => {
  const res = await apiRequest({
    method: "GET",
    url: "http://localhost:5000/discountOffer",
    // data: fromdata,
  });
  console.log(res);
  return res;
};
