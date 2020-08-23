import mongoose, { Document, Schema } from 'mongoose';

export interface PostDocument extends Document {
  title: string;
  content: boolean;
  categories?: string[];
}

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<PostDocument>('Post', PostSchema);
