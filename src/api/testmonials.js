import { apiRequest } from "../utils";

export const getTestimonial = async ({token}) => {

    const res = await apiRequest(
        {
            method: 'GET',
            url: `http://localhost:5000/testimonial`,
            headers: { Authorization: `Bearer ${token}` }
        }
    );
    return res
}