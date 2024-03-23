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
exports.deleteNote = exports.getNotesList = exports.createNote = void 0;
const userService_1 = require("../services/userService");
const createNote = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, userService_1.addNotes)(req.body.userName, req.body.password, req.body.note);
});
exports.createNote = createNote;
const getNotesList = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof req.query.userName === "string" &&
        typeof req.query.password === "string") {
        const user = yield (0, userService_1.getAllNotes)(req.query.userName, req.query.password);
        return resp.status(200).send(user);
    }
    return resp.status(404).send({ message: "User not found" });
});
exports.getNotesList = getNotesList;
const deleteNote = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield (0, userService_1.deleteNoteService)(req.params.noteId);
    if (deleted.affected && deleted.affected > 0) {
        return resp.status(200).send({ message: "user deleted successfully" });
    }
    else {
        return resp.send({ message: "Please provide valid details." });
    }
});
exports.deleteNote = deleteNote;
