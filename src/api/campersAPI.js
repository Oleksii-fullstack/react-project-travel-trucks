import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = async (params) => {
  const response = await axios.get(BASE_URL, { params });
  return response.data;
};

export const fetchCamperById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};
