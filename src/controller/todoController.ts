import { Todo } from "../models/todo";
import express, { Request, Response } from "express";
import {
  addTodo,
  deleteTodoService,
  getAllTodos,
} from "../services/userService";

export const createTodo = async (req: Request, resp: Response) => {
  return await addTodo(req.body.userName, req.body.password, req.body.todo);
};

export const getTodoList = async (req: Request, resp: Response) => {
  if (
    typeof req.query.userName === "string" &&
    typeof req.query.password === "string"
  ) {
    const user = await getAllTodos(req.query.userName, req.query.password);
    return resp.status(200).send(user);
  }
  return resp.status(404).send({ message: "User not found" });
};

export const deleteTodo = async (req: Request, resp: Response) => {
  console.log(req.params);
  const deleted = await deleteTodoService(req.params.todoId);
  console.log(deleted);
  if (deleted.affected && deleted.affected > 0) {
    return resp.status(200).send({ message: "user deleted successfully" });
  } else {
    return resp.send({ message: "Please provide valid details." });
  }
};
