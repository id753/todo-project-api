import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from '../controllers/todosController.js';

const router = Router();

// GET ВСЕХ
router.get('/todos', getTodos);

// GET ОДНОГО
router.get('/todos/:todoId', getTodoById);

//POST
router.post('/todos', createTodo);

// delete
router.delete('/todos/:todoId', deleteTodo);

// update
router.patch('/todos/:todoId', updateTodo);

export default router;
