import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import router from './router';

function bootstrap() {
  const PORT = 5000;

  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(helmet());

  app.use(router);

  app.listen(PORT, () => console.log(`🔥 The server is running on :::${PORT}`));
}

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('📃 MongoDB started');
    bootstrap();
  })
  .catch(err => console.log('🚀 ~ MongoDB connect error', err));
