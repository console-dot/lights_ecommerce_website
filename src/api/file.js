import { apiRequest } from "../utils";

export const getAllFile = async ({token}) => {

    const res = await apiRequest(
        {
            method: 'GET',
            url: `http://localhost:5000/file`,
            headers: { Authorization: `Bearer ${token}` }
        }
    );
    return res
}