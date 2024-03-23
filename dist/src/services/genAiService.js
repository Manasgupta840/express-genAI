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
exports.textInputService = void 0;
const generative_ai_1 = require("@google/generative-ai");
const API_KEY = "AIzaSyCNjJEPln2NKN1VzvitPZ6ASN9sWLksGHU";
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new generative_ai_1.GoogleGenerativeAI(API_KEY);
const gemini_pro_model = genAI.getGenerativeModel({ model: "gemini-pro" });
function textInputService(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield gemini_pro_model.generateContent(prompt);
        const response = yield result.response;
        const text = response.text();
        return text;
    });
}
exports.textInputService = textInputService;
