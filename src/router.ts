import { Router } from 'express';
import { createCategory } from './app/use-cases/category/createCategory';
import { getCategories } from './app/use-cases/category/getCategories';

const router = Router();

router.get('/categories', getCategories);
router.post('/categories', createCategory);

export default router;
