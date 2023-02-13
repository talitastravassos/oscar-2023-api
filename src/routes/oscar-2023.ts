import { getCategoriesController } from '@controllers/CategoriesController';
import { Router } from 'express';

export const router = Router();

// /oscar-2023/categories => GET
router.get('/categories', getCategoriesController);
