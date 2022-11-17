import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    const categories = await Category.create({ name, icon });

    res.json(categories);
  } catch (err) {
    console.error('⚠️ ~ err', err);
    res.sendStatus(500);
  }
}
