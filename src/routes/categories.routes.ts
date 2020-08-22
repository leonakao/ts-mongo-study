import { Router } from 'express';

const categoriesRoutes = Router();

categoriesRoutes.get('/', async (request, response) => {
  return response.json({ development: true });
});

categoriesRoutes.put('/', async (request, response) => {
  return response.json({ development: true });
});

categoriesRoutes.post('/', async (request, response) => {
  return response.json({ development: true });
});

categoriesRoutes.delete('/', async (request, response) => {
  return response.json({ development: true });
});

export default categoriesRoutes;
