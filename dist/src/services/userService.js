"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNoteService = exports.deleteNoteService = exports.addNotes = exports.getAllNotes = exports.getAllTodos = exports.deleteTodoService = exports.addTodo = exports.deleteUserService = exports.getUserDetails = exports.updateUserDetails = exports.createUserService = void 0;
const db_config_1 = require("../connection/db.config");
const notes_1 = require("../models/notes");
const todo_1 = require("../models/todo");
const user_1 = require("../models/user");
function createUserService(userName, password) {
    const user = new user_1.User(userName, password);
    return db_config_1.entityManager.save(user_1.User, user);
}
exports.createUserService = createUserService;
function updateUserDetails(userName, password, userDetails) {
    return db_config_1.entityManager.update(user_1.User, { userName: userName, password: password }, userDetails);
}
exports.updateUserDetails = updateUserDetails;
function getUserDetails(userName, password) {
    return db_config_1.entityManager.findOneBy(user_1.User, {
        userName: userName,
        password: password,
    });
}
exports.getUserDetails = getUserDetails;
function deleteUserService(userId) {
    return db_config_1.entityManager.delete(user_1.User, userId);
}
exports.deleteUserService = deleteUserService;
//COMPLETED
function addTodo(userName, password, todo) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield getUserDetails(userName, password);
        if (user) {
            todo.user = user;
            const addedTodo = db_config_1.entityManager.create(todo_1.Todo, todo);
            return addedTodo;
        }
        else {
            return { message: "User not found" };
        }
    });
}
exports.addTodo = addTodo;
//COMPLETED
function deleteTodoService(todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        const deletedMessage = yield db_config_1.entityManager.delete(todo_1.Todo, todoId);
        return deletedMessage;
    });
}
exports.deleteTodoService = deleteTodoService;
//COMPLETED
function getAllTodos(userName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const userDetail = yield getUserDetails(userName, password);
        if (userDetail) {
            const todos = yield db_config_1.entityManager.getRepository(todo_1.Todo).find({ where: { user: userDetail } });
            return todos;
        }
        else {
            return { message: "User not found" };
        }
    });
}
exports.getAllTodos = getAllTodos;
//COMPLETED
function getAllNotes(userName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield getUserDetails(userName, password);
        if (user) {
            const notesList = yield db_config_1.entityManager.getRepository(notes_1.Notes).find({ where: { user: user } });
            return notesList;
        }
        else {
            return { message: "User not found" };
        }
    });
}
exports.getAllNotes = getAllNotes;
//COMPLETED
function addNotes(userName, password, notes) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield getUserDetails(userName, password);
        if (user) {
            notes.user = user;
            const addedNotes = db_config_1.entityManager.save(notes_1.Notes, notes);
            return addedNotes;
        }
        else {
            return { message: "User not found" };
        }
    });
}
exports.addNotes = addNotes;
//COMPLETED
function deleteNoteService(NoteId) {
    return __awaiter(this, void 0, void 0, function* () {
        const deletedMessage = yield db_config_1.entityManager.delete(notes_1.Notes, NoteId);
        return deletedMessage;
    });
}
exports.deleteNoteService = deleteNoteService;
function updateNoteService(NoteId, note) {
    return __awaiter(this, void 0, void 0, function* () {
        return db_config_1.entityManager.update(notes_1.Notes, NoteId, note);
    });
}
exports.updateNoteService = updateNoteService;
