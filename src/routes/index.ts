import express from 'express';
import { router } from './oscar-2023';

export const routes = express.Router();

routes.use(router);
