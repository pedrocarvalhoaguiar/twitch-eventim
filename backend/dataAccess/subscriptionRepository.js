import Subscription from '../models/subscriptionModel.js';
import sequelize from '../database/postgres.js';

const getSubscriptionsByUserId = async (userId) => {
  const sql = `
    SELECT e.*
    FROM "subscriptions" AS s
    LEFT JOIN "events" AS e ON s."eventId" = e.id
    WHERE s."userId" = :userId
  `;

  const [results, metadata] = await sequelize.query(sql, {
    replacements: { userId },
    type: sequelize.QueryTypes.RAW, 
  });
  return results;
};

const createSubscription = async (subscriptionData) => {
  return await Subscription.create(subscriptionData);
};

const deleteSubscription = async (subscriptionId) => {
  return await Subscription.destroy({ where: { id: subscriptionId } });
};

const getSubscriptionByUserAndEventId = async (userId, eventId) => {

  return await Subscription.findOne({
    where: { userId: userId, eventId: eventId },
  });
};

const subscriptionRepository = {
  getSubscriptionsByUserId,
  createSubscription,
  deleteSubscription,
  getSubscriptionByUserAndEventId
};

export default subscriptionRepository;