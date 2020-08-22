import { Router } from 'express';
import Category from '../models/Category';

const categoriesRoutes = Router();

categoriesRoutes.post('/', async (request, response) => {
  const { name, description } = request.body;

  const category = await Category.create({
    name,
    description,
  });

  return response.json(category);
});

export default categoriesRoutes;
