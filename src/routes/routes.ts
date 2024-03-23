import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controller/userController";
import {
  createTodo,
  deleteTodo,
  getTodoList,
} from "../controller/todoController";
import { createNote, deleteNote, getNotesList } from "../controller/noteController";
import { textSearch } from "../controller/genAiController/genAiController";

const router = Router();

router.post("/add/user", createUser);
router.put("/update/user", updateUser);
router.get("/user", getUser);
router.delete("/user/:userId", deleteUser);

router.post("/add/todo", createTodo);
router.get("/todos", getTodoList);
router.delete("/todo/:todoId", deleteTodo);

router.post("/add/note", createNote);
router.get("/notes", getNotesList);
router.delete("/todo/:noteId", deleteNote);

router.post("/text/search", textSearch);



export default router;
