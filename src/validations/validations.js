import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

// кастомний валідатор для Joi, який перевірятиме значення на валідність ObjectId
const objectIdValidator = (value, helpers) => {
  if (!isValidObjectId(value)) {
    return helpers.message('Invalid id format');
  } else {
    return value;
  }
};

// Схема для перевірки параметра  todoId
export const todoIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    todoId: Joi.string().custom(objectIdValidator).required(),
  }),
};

// Валідація для POST
export const createtodoschema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(3).max(100).required(), // max змінено до 100, як у Mongoose
    completed: Joi.boolean().default(false),
    isFavorite: Joi.boolean().default(false),
  }),
};

// Валідація для PATCH
export const updatetodoschema = {
  [Segments.PARAMS]: Joi.object({
    todoId: Joi.string().custom(objectIdValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(3).max(100),
    completed: Joi.boolean(),
    isFavorite: Joi.boolean(),
  }).min(1), // Хоча б одне поле має бути присутнім для оновлення
};
