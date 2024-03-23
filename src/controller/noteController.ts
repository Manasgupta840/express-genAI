import { Notes } from "../models/notes";
import { Todo } from "../models/todo";
import {
  addNotes,
  addTodo,
  deleteNoteService,
  deleteTodoService,
  getAllNotes,
  getAllTodos,
} from "../services/userService";
import express, { Request, Response } from "express";

export const createNote = async (req: Request, resp: Response) => {
  return await addNotes(req.body.userName, req.body.password, req.body.note);
};

export const getNotesList = async (req: Request, resp: Response) => {
  if (
    typeof req.query.userName === "string" &&
    typeof req.query.password === "string"
  ) {
    const user = await getAllNotes(req.query.userName, req.query.password);
    return resp.status(200).send(user);
  }
  return resp.status(404).send({ message: "User not found" });
};

export const deleteNote = async (req: Request, resp: Response) => {
  const deleted = await deleteNoteService(req.params.noteId);
  if (deleted.affected && deleted.affected > 0) {
    return resp.status(200).send({ message: "user deleted successfully" });
  } else {
    return resp.send({ message: "Please provide valid details." });
  }
};
