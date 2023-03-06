import { getCategoriesController } from '@controllers/CategoriesController';
import * as dotenv from 'dotenv';
import express from 'express';

import { routes } from './routes';

const app = express();

dotenv.config();

const port = 3333;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', getCategoriesController);

// routes
app.use('/oscar-2023', routes);

app.listen(port, () => {
  console.log(`⚡ Server running on port ${port} ⚡`);
});
