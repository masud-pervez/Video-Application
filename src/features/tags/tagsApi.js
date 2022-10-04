import axiosInstance from "../../utils/axios";

export const getTags = async () => {
  const response = await axiosInstance.get("/tags");
  return response.data;
};
