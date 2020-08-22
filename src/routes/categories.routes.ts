import { Router } from 'express';
import Category from '../models/Category';

const categoriesRoutes = Router();

categoriesRoutes.get('/', async (request, response) => {
  return response.json({ development: true });
});

categoriesRoutes.put('/', async (request, response) => {
  return response.json({ development: true });
});

categoriesRoutes.post('/', async (request, response) => {
  const { name, description } = request.body;

  const category = await Category.create({
    name,
    description,
  });

  return response.json(category);
});

categoriesRoutes.delete('/', async (request, response) => {
  return response.json({ development: true });
});

export default categoriesRoutes;
