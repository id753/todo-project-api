import { Schema, model } from 'mongoose';

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    content: {
      type: String,
      // required: [true, 'Content is required'],
    },
    categoryId: {
      type: String,
      required: true,
      enum: ['0', '1', '2', '3', '4', '5'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    tags: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const todo = model('todo', todoSchema);

export default todo;
