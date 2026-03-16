import createHttpError from 'http-errors';
import Todo from '../models/todo.js';

// GET  ALL
export const getTodos = async (req, res) => {
  const data = await Todo.find();
  res.status(200).json(data);
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
