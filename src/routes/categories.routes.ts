import { Router } from 'express';
import Category from '@models/Category';

const categoriesRoutes = Router();

categoriesRoutes.get('/', async (request, response) => {
  const categories = await Category.find();

  return response.status(200).json(categories);
});

categoriesRoutes.get('/:categoryId', async (request, response) => {
  const { categoryId } = request.params;

  const category = await Category.findById(categoryId);

  if (!category) {
    throw new Error('Category not found.');
  }

  return response.status(200).json(category);
});

categoriesRoutes.put('/:categoryId', async (request, response) => {
  const { categoryId } = request.params;

  const category = await Category.findById(categoryId);

  if (!category) {
    throw new Error('Category not found.');
  }

  await category.updateOne(request.body);

  return response.status(200).send();
});

categoriesRoutes.post('/', async (request, response) => {
  const { name, description } = request.body;

  const category = await Category.create({
    name,
    description,
  });

  return response.status(201).json(category);
});

categoriesRoutes.delete('/:categoryId', async (request, response) => {
  const { categoryId } = request.params;

  const category = await Category.findById(categoryId);

  if (!category) {
    throw new Error('Category not found');
  }

  await category.remove();

  return response.status(204).send();
});

export default categoriesRoutes;
