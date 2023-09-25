import subscriptionRepository from '../dataAccess/subscriptionRepository.js';

const getSubscriptionsByUserId = async (userId) => {
  return await subscriptionRepository.getSubscriptionsByUserId(userId);
};

const createSubscription = async (subscriptionData) => {
    return await subscriptionRepository.createSubscription(subscriptionData)
}

const deleteSubscription = async (subscriptionId) => {
    return await subscriptionRepository.deleteSubscription({ where: { id: subscriptionId } });
  };

  const getSubscriptionByUserAndEventId = async (userId, eventId) => {
    return await subscriptionRepository.getSubscriptionByUserAndEventId(userId, eventId);
  };

const subscriptionService = {
    getSubscriptionsByUserId,
    createSubscription,
    deleteSubscription,
    getSubscriptionByUserAndEventId
}

export default subscriptionService;
