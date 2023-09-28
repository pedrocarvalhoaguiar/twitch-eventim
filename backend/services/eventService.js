import eventRepository from '../dataAccess/eventRepository.js' 

const getEvents = async (page, limit, search, order, userId) => {
    return await eventRepository.getEvents(page, limit, search, order, userId);
  };

const getEventById = async (eventId) => {
  return await eventRepository.getEventById(eventId);
};

const getEventByTitle = async (eventTitle) => {
  return await eventRepository.getEventByTitle(eventTitle);
};

const createEvent = async (eventData) => {
  return await eventRepository.createEvent(eventData);
};

const updateEvent = async (eventId, updatedEventData) => {
  return await eventRepository.updateEvent(eventId, updatedEventData);
};

const deleteEvent = async (eventId) => {
  return await eventRepository.deleteEvent(eventId);
};

const eventService = {
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents,
  getEventByTitle
};

export default eventService