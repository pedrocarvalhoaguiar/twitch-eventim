import chatRepository from '../dataAccess/chatRepository.js';

const saveMessage = async (messageData) => {
  return await chatRepository.saveMessage(messageData);
};

const getChatHistory = async (eventId) => {
  return await chatRepository.getChatHistory(eventId);
};

const chatService = {
    saveMessage,
    getChatHistory
}

export default chatService;
