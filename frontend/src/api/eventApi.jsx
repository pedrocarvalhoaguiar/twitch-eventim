import axiosInstance from "./baseApi";

const getEvents = async () => {
  try {
    return await axiosInstance.get('/events/all');
  } catch (error) {
    throw error
  }
};

const getMyEvents = async () => {
  try {
    return await axiosInstance.get('/events/by-user');
  } catch (error) {
    throw error
  }
};


const createEvent = async (e) => {
  const body = {
    title: e.target.title.value,
    description: e.target.description.value,
    startDatetime: e.target.startDatetime.value,
    endDatetime: e.target.endDatetime.value,
  }
  try {
    return await axiosInstance.post('/events/register', body);

  } catch (error) {
    throw error
  }

};

export { getEvents, createEvent, getMyEvents }