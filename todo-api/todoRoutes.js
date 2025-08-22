import express from "express";
import { getAll, create, remove } from "./todoController.js";

const router = express.Router();

// Routes
router.get("/", getAll);       
router.post("/", create); 
router.delete("/:id", remove);

export default router;
