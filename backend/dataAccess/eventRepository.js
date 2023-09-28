import Event from '../models/eventModel.js';
import { Op } from 'sequelize'


const getEvents = async (page = 1, limit = 10, search, order = 'createdAt', userId) => {
  try {
    const options = {
      offset: ((page - 1) * limit) || 0,
      limit: limit,
      order: [[order, 'DESC']],
    };

    console.log(userId)

    if (search) {
      options.where = {
        title: { [Op.iLike]: `%${search}%` },
      };
    } else if (userId){
      options.where = {
        ownedBy: userId,
      };
    }

    const { rows: events, count } = await Event.scope({ method: ['subscribedByUser', '65dd4d40-7844-4063-a19e-067d37cc2fea'] }).findAndCountAll(options);

    return { events, totalCount: count };
  } catch (error) {
    throw error;
  }
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
