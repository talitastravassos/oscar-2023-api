import { getCategoriesController } from '@controllers/CategoriesController';
import * as dotenv from 'dotenv';
import express from 'express';

import { routes } from './routes';

const app = express();

dotenv.config();

const port = 3333;

app.get('/', getCategoriesController);

// routes
app.use('/oscar-2023', routes);

app.listen(port, () => {
  console.log(`⚡ Server running on port ${port} ⚡`);
});
