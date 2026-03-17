import createHttpError from 'http-errors';
import Todo from '../models/todo.js';

// GET  ALL
export const getTodos = async (req, res) => {
  const {
    page = 1,
    perPage = 10,
    // filterId = 'all',
    search = '',
  } = req.query;

  const skip = (page - 1) * perPage;
  const todoQuery = Todo.find();

  // Фильтрация
  // if (filterId === 'favorite') {
  //   todoQuery.where('isFavorite').equals(true);
  // } else if (filterId === 'complete') {
  //   todoQuery.where('completed').equals(true);
  // } else if (filterId === 'incomplete') {
  //   todoQuery.where('completed').equals(false);
  // }

  // Поиск по title
  if (search) {
    todoQuery.where('title').regex(new RegExp(search, 'i'));
  }

  const [totalItems, todos] = await Promise.all([
    todoQuery.clone().countDocuments(),
    todoQuery.skip(skip).limit(perPage).sort({ createdAt: -1 }), // Новые задачи всегда сверху
  ]);

  const totalPages = Math.ceil(totalItems / perPage) || 1;

  // Отправляем ОДИН ответ со всеми данными
  res.status(200).json({
    status: 200,
    message: 'Successfully found todos!',
    data: {
      todos,
      page,
      perPage,
      totalItems,
      totalPages,

      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  });
};

// GET ID
export const getTodoById = async (req, res, next) => {
  const { todoId } = req.params;
  const data = await Todo.findById(todoId);
  if (!data) {
    next(createHttpError(404, 'todo not found'));
    return;
  }
  res.status(200).json(data);
};

// POST
export const createTodo = async (req, res) => {
  const data = await Todo.create(req.body);
  res.status(201).json(data);
};

// DELETE
export const deleteTodo = async (req, res, next) => {
  const { todoId } = req.params;
  const data = await Todo.findOneAndDelete({
    _id: todoId,
  });
  if (!data) {
    next(createHttpError(404, 'todo not found'));
    return;
  }
  res.status(200).json(data);
};

//  UPDATE
export const updateTodo = async (req, res, next) => {
  const { todoId } = req.params;
  const data = await Todo.findOneAndUpdate({ _id: todoId }, req.body, {
    new: true,
  });
  if (!data) {
    next(createHttpError(404, 'todo not found'));
    return;
  }
  res.status(200).json(data);
};
