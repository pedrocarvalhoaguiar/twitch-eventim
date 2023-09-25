import chatService from '../services/chatService.js'

const saveMessage = async (req, res) => {
  const { sender, message } = req.body;
  const eventId = req.params.id
  const userId = req.user.userId
  const messageData = {
    sender: sender,
    message: message,
    eventId: eventId,
    userId: userId
  }
  if (!sender || !message){
    res.json({message: "Can't set a message without sender and message"})
    return 
  }
  try {
    const savedMessage = await chatService.saveMessage(messageData);
    res.json(savedMessage);
  } catch (error) {
    res.status(500).json({ error: 'Could not save message' });
  }
};

const getChatHistory = async (req, res) => {
  const eventId = req.params.id
  try {
    const chatHistory = await chatService.getChatHistory(eventId);
    res.json(chatHistory);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch chat history' });
  }
};

const chatController = {
    saveMessage,
    getChatHistory
}

export default chatController
