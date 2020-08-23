import { Router } from 'express';
import categoriesRoutes from './categories.routes';
import postsRoutes from './posts.routes';

const routes = Router();

routes.use('/categories', categoriesRoutes);
routes.use('/posts', postsRoutes);

export default routes;
