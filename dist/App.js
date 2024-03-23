"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = __importDefault(require("./src/connection/db.config"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_output_json_1 = __importDefault(require("./src/swagger_output.json"));
const routes_1 = __importDefault(require("./src/routes/routes"));
const app = (0, express_1.default)();
const PORT = 3001;
// run();
// const model = genAI.getGenerativeModel({ model: "gemini-pro"});
var jsonParser = body_parser_1.default.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(jsonParser);
// app.use('/', async (req: Request, resp: Response)=>{
//     console.log(user);
//     resp.json(user);
// });
app.use('/', routes_1.default);
var Customer;
(function (Customer) {
    Customer["retail"] = "Retail";
    Customer["employee"] = "Employee";
})(Customer || (Customer = {}));
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_output_json_1.default));
(0, db_config_1.default)();
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});
