import { Router } from 'express';
import Post, { PostDocument } from '@models/Post';
import Category from '@models/Category';

const postsRoutes = Router();

postsRoutes.get('/', async (request, response) => {
  const posts = await Post.find().populate('categories');

  return response.status(200).json(posts);
});

postsRoutes.get('/:postId', async (request, response) => {
  const { postId } = request.params;

  const post = await Post.findById(postId).populate('categories');

  if (!post) {
    throw new Error('Post not found.');
  }

  return response.status(200).json(post);
});

postsRoutes.put('/:postId', async (request, response) => {
  const { postId } = request.params;

  const post = await Post.findById(postId);

  if (!post) {
    throw new Error('Post not found.');
  }

  const { categories, title, content }: PostDocument = request.body;

  if (categories) {
    const existentCategories = await Category.find({
      _id: {
        $in: categories,
      },
    });

    const existentCategoriesIds: string[] = existentCategories.map(category =>
      category._id.toString(),
    );

    const existsCategoriesNotCreated = categories.filter(
      category => !existentCategoriesIds.includes(category),
    );

    if (existsCategoriesNotCreated.length > 0) {
      throw new Error('Categories were sent that do not exist.');
    }

    await post.updateOne({
      $addToSet: { categories: existentCategoriesIds },
      title,
      content,
    });

    return response.status(200).send();
  }

  await post.updateOne({ title, content });

  return response.status(200).send();
});

postsRoutes.post('/', async (request, response) => {
  const { title, content, categories } = request.body;

  const post = await Post.create({
    title,
    content,
    categories,
  });

  return response.status(201).json(post);
});

postsRoutes.delete('/:postId', async (request, response) => {
  const { postId } = request.params;

  const post = await Post.findById(postId);

  if (!post) {
    throw new Error('Post not found');
  }

  await post.remove();

  return response.status(204).send();
});

export default postsRoutes;
