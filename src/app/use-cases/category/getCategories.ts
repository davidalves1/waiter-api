import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function getCategories(req: Request, res: Response) {
  const categories = await Category.find();

  return res.json(categories);
}
