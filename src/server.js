import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { errors } from 'celebrate';
import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import todosRoutes from './routes/todosRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

// Глобальні mdiddleware
app.use(logger); //  Логування запитів
app.use(
  express.json({
    limit: '100kb', // максимум 100 кілобайт
  }),
); // Middleware для парсингу JSON
app.use(cors()); // Дозволяє запити з будь-яких джерел

// підключаємо групу маршрутів todos
app.use(todosRoutes);

// Middleware 404
app.use(notFoundHandler);

// Обробка помилок від celebrate (валідація)
app.use(errors());
// Middleware для обробки помилок
app.use(errorHandler);

await connectMongoDB();

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
