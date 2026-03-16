import createHttpError from 'http-errors';
import todo from '../models/todo.js';

// GET  ALL
export const getTodos = async (req, res) => {
  const todos = await todo.find();
  res.status(200).json(todos);
};

// GET ID
export const getTodoById = async (req, res, next) => {
  const { todoId } = req.params;
  const todo = await todo.findById(todoId);
  if (!todo) {
    next(createHttpError(404, 'todo not found'));
    return;
  }
  res.status(200).json(todo);
};

// POST
export const createTodo = async (req, res) => {
  const todo = await todo.create(req.body);
  res.status(201).json(todo);
};

// DELETE
export const deleteTodo = async (req, res, next) => {
  const { todoId } = req.params;
  const todo = await todo.findOneAndDelete({
    _id: todoId,
  });
  if (!todo) {
    next(createHttpError(404, 'todo not found'));
    return;
  }
  res.status(200).json(todo);
};

//  UPDATE
export const updateTodo = async (req, res, next) => {
  const { todoId } = req.params;
  const todo = await todo.findOneAndUpdate({ _id: todoId }, req.body, {
    new: true,
  });
  if (!todo) {
    next(createHttpError(404, 'todo not found'));
    return;
  }
  res.status(200).json(todo);
};
