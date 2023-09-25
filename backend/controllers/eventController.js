import eventService from '../services/eventService.js'

const getEvents = async (req, res) => {
  try {
    const { page = 1, limit = 10, search, order = 'createdAt' } = req.query;

    const pageInt = parseInt(page, 10);
    const limitInt = parseInt(limit, 10);

    const events = await eventService.getEvents(pageInt, limitInt, search, order);

    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getEventById = async (req, res) => {
  const eventId = req.params.id;
  const event = await eventService.getEventById(eventId);
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ error: 'Event not found' });
  }
};

const createEvent = async (req, res) => {
  const eventData = req.body;

  if (!eventData?.title || !eventData?.description || !eventData?.startDatetime || !eventData?.endDatetime) {
    res.status(400).json({ message: "Event data must have title, description, startDatetime, and endDatetime" });
    return; 
  }

  const now = new Date();
  const startDatetime = new Date(eventData.startDatetime);
  const endDatetime = new Date(eventData.endDatetime);

  if (startDatetime <= now.getTime() + 30 * 60 * 1000) {
    res.status(400).json({ message: "Event startDatetime must be at least 30 minutes from now" });
    return;
  }


  if (endDatetime <= startDatetime.getTime() + 15 * 60 * 1000) {
    res.status(400).json({ message: "Event endDatetime must be at least 15 minutes after startDatetime" });
    return;
  }


  try {
    let event = await eventService.getEventByTitle(eventData.title);
    if (!event) {
      eventData['ownedBy'] = req.user.userId;
      event = await eventService.createEvent(eventData);
      res.status(201).json({ message: 'Event registered successfully' });
    } else {
      res.status(400).json({ message: 'Event title already in use' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const updatedEventData = req.body;
  const updatedEvent = await eventService.updateEvent(eventId, updatedEventData);
  if (updatedEvent) {
    res.json(updatedEvent);
  } else {
    res.status(404).json({ error: 'Event not found' });
  }
};

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;
  const deletedEvent = await eventService.deleteEvent(eventId);
  if (deletedEvent) {
    res.json({ message: 'Event deleted successfully' });
  } else {
    res.status(404).json({ error: 'Event not found' });
  }
};

const eventController = {
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents
};

export default eventController
