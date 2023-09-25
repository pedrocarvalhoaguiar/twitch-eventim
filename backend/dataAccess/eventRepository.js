import Event from '../models/eventModel.js';


const getEvents = async () => {
    return await Event.findAll();
  };
  
const getEventById = async (eventId) => {
  const event = await Event.findByPk(eventId, {
    attributes: ['title', 'description']
  });
  return event;
};

const getEventByTitle = async (eventTitle) => {
  return await Event.findOne({
    where: { title: eventTitle }
  });
};

const createEvent = async (eventData) => {
  return await Event.create(eventData);
};

const updateEvent = async (eventId, updatedEventData) => {
  const event = await Event.findByPk(eventId);
  if (event) {
    return await event.update(updatedEventData);
  }
  return null;
};

const deleteEvent = async (eventId) => {
  return await Event.destroy({ where: { id: eventId } });
};

const eventRepository = {
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents,
  getEventByTitle
}

export default eventRepository
