import ChatHistory from '../models/chatModel.js';

const saveMessage = async (messageData) => {
  const chatMessage = new ChatHistory(messageData);
  return await chatMessage.save();
};

const getChatHistory = async (eventId) => {
  return await ChatHistory.find({eventId: eventId}).sort({ timestamp: -1 });
};

const chatRepository = { saveMessage, getChatHistory };

export default chatRepository;
