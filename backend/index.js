import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './database/postgres.js';
import userRoutes from './routes/userRoutes.js'
import eventRoutes from './routes/eventRoutes.js'
import connectDB from './database/mongo.js'
import chatRoutes from './routes/chatRoutes.js'
import subscriptionRoutes from './routes/subscriptionRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

connectDB();

app.use('/', userRoutes)
app.use('/events', eventRoutes)
app.use('/chat', chatRoutes)
app.use('/subscribe', subscriptionRoutes)

sequelize.sync()
  .then(() => {
    console.log('Tables synchronized successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error synchronizing tables:', error);
  });