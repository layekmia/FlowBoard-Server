Got it! Here's the updated **README.md** with clear installation and **API testing (Postman / cURL)** instructions.
Just copy and paste this:

---

# 🗂️ Kanban Board Backend

This is the **backend service** for the Kanban Task Management application.  
It provides a RESTful API to manage boards and tasks, including adding boards, creating tasks, updating task status, and deleting tasks.  
The backend is built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.

---

## 🚀 Features
- Create boards with color, name, and tasks.
- Add tasks to a board with title and status (`todo`, `progress`, `completed`).
- Update the status of tasks (drag-and-drop in the frontend).
- Delete tasks from a board.
- Persist data using MongoDB.
- RESTful API ready for frontend integration.
- Optimistic UI updates (instant UI changes before backend confirmation)

---

## 🛠️ Tech Stack
- **Node.js** (Runtime)
- **Express.js** (Web framework)
- **MongoDB** (Database)
- **Mongoose** (ODM)
- **Cors** (Cross-origin requests)
- **Dotenv** (Environment variables)
- **Nodemon** (Development server)

---

## 📂 Project Structure
```

kanban-backend/
├── controllers/
│   ├── boardController.js       # Handles board and task logic
├── models/
│   ├── Board.js                 # Mongoose schema for boards
├── routes/
│   ├── boardRoutes.js           # API routes for boards
├── config/
│   ├── db.js                    # MongoDB connection
├── server.js                    # Entry point of the app
├── .env                         # Environment variables
└── package.json

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/kanban-backend.git
cd kanban-backend
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/kanban
```

### 4️⃣ Start MongoDB

If you are running MongoDB locally:

```bash
mongod
```

If you're using MongoDB Atlas, make sure your `MONGO_URI` in `.env` is correct.

### 5️⃣ Run the server

```bash
npm run dev
```

The backend will run at **[http://localhost:5000](http://localhost:5000)**

---

## 🧪 API Testing

You can test the APIs using **Postman**, **Insomnia**, or **cURL**.

---

### 1. Create a new board

**POST** `/api/boards`

```json
{
  "boardName": "Development",
  "color": "#f97316"
}
```

**cURL**

```bash
curl -X POST http://localhost:5000/api/boards \
  -H "Content-Type: application/json" \
  -d '{"boardName":"Development","color":"#f97316"}'
```

---

### 2. Get all boards

**GET** `/api/boards`

**cURL**

```bash
curl http://localhost:5000/api/boards
```

---

### 3. Add a task to a board

**POST** `/api/boards/:boardId/tasks`

```json
{
  "title": "Implement drag and drop",
  "status": "todo"
}
```

**cURL**

```bash
curl -X POST http://localhost:5000/api/boards/<boardId>/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Implement drag and drop","status":"todo"}'
```

---

### 4. Update task status

**PATCH** `/api/boards/:boardId/tasks/:taskId`

```json
{
  "status": "progress"
}
```

**cURL**

```bash
curl -X PATCH http://localhost:5000/api/boards/<boardId>/tasks/<taskId> \
  -H "Content-Type: application/json" \
  -d '{"status":"progress"}'
```

---

### 5. Delete a task

**DELETE** `/api/boards/:boardId/tasks/:taskId`

**cURL**

```bash
curl -X DELETE http://localhost:5000/api/boards/<boardId>/tasks/<taskId>
```

---

## 🏗️ Future Improvements

* User authentication (JWT)
* Real-time updates with WebSockets
* Task due dates and priority
* Activity logs
* Deploy to cloud (Render, Railway, etc.)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

```

---

Do you also want me to add **API response examples (JSON)** for each endpoint in the README (like success and error responses)?  
This will make it even easier for testing and documentation.
```
