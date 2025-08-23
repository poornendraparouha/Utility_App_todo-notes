# Utility App - Notes/Todo Manager

A full-stack web application for managing notes and todo items with a clean, responsive interface and Redux state management.

## 🚀 Features

- **Notes Management**: Create, view, edit, and delete notes
- **Todo List**: Add, complete, and remove todo items
- **Responsive Design**: Works on desktop and mobile devices
- **Redux State Management**: Centralized state management for better data flow
- **RESTful API**: Backend API for persistent data storage

## 📁 Project Structure

```
Utility_App_todo_notes/
├── backend/                  
│   ├── index.js               
│   ├── package.json          
│   ├── package-lock.json  
│   ├── .gitignore            
│   ├── noteController.js     
│   ├── noteRoutes.js          
│   ├── todoController.js    
│   └── todoRoutes.js      
├── public               
├── src/                     
│   ├── components/          
│   │   ├── Home/            
│   │   │   ├── Home.css   
│   │   │   └── Home.js   
│   │   ├── NavBar/          
│   │   │   ├── NavBar.css   
│   │   │   └── NavBar.js 
│   │   ├── NoteForm/       
│   │   │   ├── NoteForm.css
│   │   │   └── NoteForm.js  
│   │   ├── NoteList/        
│   │   │   ├── NoteList.css
│   │   │   └── NoteList.js  
│   │   ├── ToDoForm/       
│   │   │   ├── ToDoForm.css 
│   │   │   └── ToDoForm.js  
│   │   └── ToDoList/       
│   │       ├── ToDoList.css 
│   │       └── ToDoList.js 
│   ├── redux/              
│   │   ├── store.js         
│   │   ├── middlewares/    
│   │   │   └── loggerMiddleware.js 
│   │   └── reducers/    
│   │       ├── noteReducers.js      
│   │       ├── todoReducers.js      
│   │       └── notificationReducers.js 
│   ├── App.css   
│   ├── App.js                  
│   ├── index.css            
│   ├── index.js             
├── package.json          
├── package-lock.json   
├── .gitignore           
└── README.md       
```

## 🛠️ Technology Stack

### Frontend
- **React** - JavaScript library for building user interfaces
- **Redux** - State management library
- **CSS** - Styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## ⚡ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/poornendraparouha/Utility_App_todo-notes.git
   cd Utility_App_todo_notes
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ..
   npm install
   ```

4. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The backend will run on http://localhost:5000

5. **Start the frontend development server** (in a new terminal)
   ```bash
   npm start
   ```
   The frontend will run on http://localhost:3000

## 🎯 Usage

1. Open your browser and navigate to http://localhost:3000
2. Use the navigation to switch between Notes and Todo sections
3. Create new notes or todo items using the forms
4. Edit or delete existing items as needed

## 📝 API Endpoints

### Notes
- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

### Todos
- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo


