import mongoose, { mongo } from "mongoose";
import { entityManager } from "../connection/db.config";
import { Notes } from "../models/notes";
import { Todo } from "../models/todo";
import { User } from "../models/user";

export function createUserService(userName: string, password: string) {
  const user = new User(userName, password);
  return entityManager.save(User, user);
}

export function updateUserDetails(
  userName: string,
  password: string,
  userDetails: User
) {
  return entityManager.update(
    User,
    { userName: userName, password: password },
    userDetails
  );
}

export function getUserDetails(userName: string, password: string) {
  return entityManager.findOneBy(User, {
    userName: userName,
    password: password,
  });
}

export function deleteUserService(userId : string) {
  return entityManager.delete(User, userId);
}

//COMPLETED
export async function addTodo(userName: string, password: string, todo: Todo) {
  const user = await getUserDetails(userName, password);
  if (user) {
    todo.user = user;
    const addedTodo = entityManager.create(Todo, todo);
    return addedTodo;
  } else {
    return { message: "User not found" };
  }
}

//COMPLETED
export async function deleteTodoService(todoId: string){
  const deletedMessage = await entityManager.delete(Todo, todoId);
  return deletedMessage;
}

//COMPLETED
export async function getAllTodos(
  userName: string,
  password: string,
) {
  const userDetail = await getUserDetails(userName, password);
  if (userDetail) {
    const todos = await entityManager.getRepository(Todo).find({where:{user: userDetail}});
    return todos;
  } else {
    return { message: "User not found" };
  }
}

//COMPLETED
export async function getAllNotes(
  userName: string,
  password: string,
) {
  const user = await getUserDetails(userName, password);
  if (user) {
    const notesList = await entityManager.getRepository(Notes).find({where:{user: user}});
    return notesList;
  } else {
    return { message: "User not found" };
  }
}

//COMPLETED
export async function addNotes(
  userName: string,
  password: string,
  notes: Notes
) {
  const user = await getUserDetails(userName, password);
  if (user) {
    notes.user = user;
    const addedNotes = entityManager.save(Notes, notes);
    return addedNotes;
  } else {
    return { message: "User not found" };
  }
}

//COMPLETED
export async function deleteNoteService(NoteId: string){
  const deletedMessage = await entityManager.delete(Notes, NoteId);
  return deletedMessage;
}

export async function updateNoteService(NoteId: string, note: Notes) {
  return entityManager.update(Notes,NoteId,note )
}