import { Schema, model, Document } from 'mongoose';

export interface CategoryDocument extends Document {
  name: string;
  description: string;
}

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
