# API Todo App | Multiple Implementations
## A REST API for a Todo List application that supports full CRUD operations (Create, Read, Update, Delete) along with additional features like marking tasks as completed, toggling favorites, and advanced filtering.

## 🎨 [Live Project](https://todo-project-api-x8pg.onrender.com/todos)
## ⚙️ [Frontend Repository](https://github.com/id753/todo-project)

##  Backend Tech Stack
### Node.js, Express.js, MongoDB, Mongoose; REST API; Validation (Joi, Celebrate); Logging (Pino); Error Handling; Pagination & Search; API Testing (Postman); Deployment (Render) 

## Features
### Backend Experience
- ⚙️ **REST API:** Implemented CRUD operations for todos with proper routing.  
- 🗄 **Database Integration:** MongoDB & Mongoose for data modeling and persistence.  
- 🔍 **Search & Pagination:** Implemented filtering, search (regex), and paginated results.
- 🛡 **Validation:** Joi & Celebrate to ensure data integrity.  
- ❌ **Error Handling:** Custom middleware + http-errors for consistent responses.  
- 📝 **Logging:** Pino for request and error logging.
- 🚀 **Deployment:** Deployed backend on Render.  
- 🧪 **API Testing:** Tested all endpoints using Postman to ensure reliability.  
- ✅ Followed coding standards, modular structure, and middleware patterns for maintainable code.

## Getting Started (Backend)
1️⃣ Clone the repository
   
    git clone <your-repository-link>
2️⃣ Install dependencies

    npm install
3️⃣ Create an environment file (.env)
Copy .env.example to .env and edit if necessary:

    PORT=
    MONGO_URI=
4️⃣ Run the server locally

    npm run dev
The server will be available at: http://localhost:3000

5️⃣ Test the API
Use [Postman](https://www.postman.com/)  or any API testing tool.

    Example request: GET http://localhost:3000/todos

## ⚠️ Note:
The server is hosted on Render's free plan and may “sleep” when idle — the first load after waking up can take 30–50 seconds.
