import { Router } from 'express';

const categoriesRoutes = Router();

categoriesRoutes.get('/', async (request, response) => {
  return response.json({ ok: true });
});

export default categoriesRoutes;
