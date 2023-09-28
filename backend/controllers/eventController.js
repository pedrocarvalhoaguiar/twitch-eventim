import eventService from '../services/eventService.js'
import moment from 'moment'

const getEvents = async (req, res) => {
  try {
    const { page = 1, limit = 10, search, order = 'createdAt' } = req.query;

    const pageInt = parseInt(page, 10);
    const limitInt = parseInt(limit, 10);
    const userId = req?.user?.userId || null
    const events = await eventService.getEvents(pageInt, limitInt, search, order, userId);

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
    res.status(400).json({ error: "Event data must have title, description, startDatetime, and endDatetime" });
    return; 
  }

  const now = new Date();
  const startDatetimeFormatted = moment(eventData.startDatetime, 'DD/MM/YYYY, hh:mm A').format('YYYY-MM-DDTHH:mm:ssZ');
  const endDatetimeFormatted = moment(eventData.endDatetime, 'DD/MM/YYYY, hh:mm A').format('YYYY-MM-DDTHH:mm:ssZ');

  if (!moment(startDatetimeFormatted).isValid() || !moment(endDatetimeFormatted).isValid()) {
    res.status(400).json({ error: "Invalid date format for start or end" });
    return;
  }

  const startDatetime = new Date(startDatetimeFormatted);
  const endDatetime = new Date(endDatetimeFormatted);
  console.log(startDatetime)
  if (startDatetime <= now.getTime() + 30 * 60 * 1000) {
    res.status(400).json({ error: "Event Start must be at least 30 minutes from now" });
    return;
  }

  if (endDatetime <= startDatetime.getTime() + 15 * 60 * 1000) {
    res.status(400).json({ error: "Event End must be at least 15 minutes after Start" });
    return;
  }

  try {
    let event = await eventService.getEventByTitle(eventData.title);
    if (!event) {
      eventData['ownedBy'] = req.user.userId;
      eventData.startDatetime = startDatetime
      eventData.endDatetime = endDatetime
      event = await eventService.createEvent(eventData);
      res.status(201).json({ error: 'Event registered successfully' });
    } else {
      res.status(400).json({ error: 'Event title already in use' });
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
