import { Schema, model, Document } from 'mongoose';

interface CategoryDocument extends Document {
  name: string;
  description: string;
}

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model<CategoryDocument>('Category', CategorySchema);
