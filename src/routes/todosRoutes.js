import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from '../controllers/todosController.js';
import {
  createtodoschema,
  todoIdParamSchema,
  updatetodoschema,
} from '../validations/validations.js';
import { celebrate } from 'celebrate';

const router = Router();

// GET ВСЕХ
router.get('/todos', getTodos);

// GET ОДНОГО
router.get('/todos/:todoId', celebrate(todoIdParamSchema), getTodoById);

//POST
router.post('/todos', celebrate(createtodoschema), createTodo);

// DELETE
router.delete('/todos/:todoId', celebrate(todoIdParamSchema), deleteTodo);

// UPDATE
router.patch('/todos/:todoId', celebrate(updatetodoschema), updateTodo);

export default router;
