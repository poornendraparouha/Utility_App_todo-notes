# Utility App - Todo/Notes

A full-featured utility application that allows users to manage their **Todos** and **Notes** efficiently. Built with **React** for the frontend and **Node.js/Express** for the backend API.

## Features

### Todo List
- Add, edit, or remove tasks.
- Mark tasks as complete or pending.
- Filter tasks by their status (completed or pending).

### Notes
- Create, edit, and delete notes.
- Notes can have a title and body for better organization.

## Project Structure

### Frontend (React)
- **Components**: Reusable UI components such as `TodoList`, `NoteCard`, `Header`, and more.
- **Context**: Manages global state using React Context API.
- **Styles**: Simple CSS styling for better user experience.

### Backend (Todo API)
- **Node.js/Express**: Handles RESTful API routes for managing todos.
- **MongoDB**: Database to store todos (optional if database integration is included).

## Getting Started

### Prerequisites
- **Node.js**: Ensure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/poornendraparouha/Utility_App_todo-notes.git

2. Navigate to the project folder:
    Utility_App_todo-notes

3. Install dependencies:
    npm install

4. Navigate to the backend (Todo API):
    cd todo-api
    npm install

## Running the App
To start the app locally:

1. Start the server:
    cd todo-api
    npm install
    npm start

2. Start the frontend:
    cd ..
    npm start

Open http://localhost:3000 to view the app in the browser.

### Built With:

- React: Frontend library for building user interfaces.
- Node.js: JavaScript runtime for backend logic.
- Express: Web framework for backend routes.
- CSS: Styling framework for the frontend.

## App Overview
![App Overview](media/app.png)

## Todo Feature
![Todo Screenshot](media/todo.png)

## Notes Feature
![Notes Screenshot](media/notes.png)