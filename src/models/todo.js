import { model, Schema } from 'mongoose';

todoSchema.set('toJSON', {
  virtuals: true, // Создает текстовое поле 'id' на основе '_id'
  versionKey: false, // Убирает поле '__v'
  transform: function (doc, ret) {
    delete ret._id; // Удаляет оригинальный '_id', оставляя только 'id'
  },
});

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const Todo = model('Draft', todoSchema);

export default Todo;
