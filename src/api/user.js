import { apiRequest } from "../utils";

export const userLogin = async ({fromdata}) => {
    const res = await apiRequest(
        {
            method: 'POST',
            url: 'http://localhost:5000/auth/signin',
            data: fromdata,
        }
    );
    console.log(res)
    return res
}