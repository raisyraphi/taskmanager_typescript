import express from'express';
const app = express();

import tasks from './routes/tasks';
import connectDB from './db/connect';
import dotenv from 'dotenv';
dotenv.config();
import notFound from './middleware/not-found';
import errorHandlerMiddleware from './middleware/error-handler';



app.use(express.static('./public'));
app.use(express.json());



app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port =  5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
