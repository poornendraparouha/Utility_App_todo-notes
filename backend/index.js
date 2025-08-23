import express from "express";
import cors from "cors";
import todoRoutes from "./todoRoutes.js";
import noteRoutes from "./noteRoutes.js";

const server = express();

// Enable CORS for all routes
server.use(cors());
server.use(express.json()); 

// Use your todoRoutes
server.use("/api/todos", todoRoutes);
server.use("/api/notes", noteRoutes);

server.get("/", (req, res) => {
  res.send("Welcome to Utility API");
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
