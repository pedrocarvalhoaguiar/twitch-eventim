import axiosInstance from "./baseApi";

const getEvents = async () => {
    try {
      return await axiosInstance.get('/events/all');
    } catch (error) {
    }
  };

export { getEvents }