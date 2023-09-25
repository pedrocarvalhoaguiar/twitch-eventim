import subscriptionService from "../services/subscriptionService.js";

const getSubscriptionsByUserId = async (req, res) => {
  const userId = req.params.id;
  const subscriptions = await subscriptionService.getSubscriptionsByUserId(userId);
  if (subscriptions) {
    res.json(subscriptions);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

const createSubscription = async (req, res) => {
  const subscriptionData = req.body;
  const userId = req.user.userId
  subscriptionData.userId = userId
  if (!subscriptionData?.eventId) {
    res.status(400).json({ message: "Can't subscribe withou eventId" });
  }

  try {
    let subscription = await subscriptionService.getSubscriptionByUserAndEventId(userId, subscriptionData.eventId);

    if (!subscription) {
        subscription = await subscriptionService.createSubscription(subscriptionData);
      res.status(201).json({ message: 'User subscribed successfully' });
    } else {
      res.status(400).json({ message: 'Subscription already exists' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deleteSubscription = async (req, res) => {
  const eventId = req.params.id;
  const userId = req.user.userId
  const deletedSubscription = await subscriptionService.deleteSubscription(userId, eventId);
  if (deletedSubscription) {
    res.json({ message: 'User unsubscribed successfully' });
  } else {
    res.status(404).json({ error: 'Event not found' });
  }
};

const subscriptionController = {
    getSubscriptionsByUserId,
    createSubscription,
    deleteSubscription,
};

export default subscriptionController;
