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
exports.textSearch = void 0;
const genAiService_1 = require("../../services/genAiService");
const textSearch = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield (0, genAiService_1.textInputService)((_a = String(req.body.query)) !== null && _a !== void 0 ? _a : "");
    resp.send(result);
});
exports.textSearch = textSearch;
