import express, { Application, Request, Response } from "express";
import DB from "./src/connection/db.config";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./src/swagger_output.json";
import router from "./src/routes/routes";

const app = express();
const PORT = 3001;


// run();

// const model = genAI.getGenerativeModel({ model: "gemini-pro"});













var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(jsonParser);
// app.use('/', async (req: Request, resp: Response)=>{
//     console.log(user);
//     resp.json(user);
// });
app.use('/', router);

enum Customer {
  retail = "Retail",
  employee = "Employee",
}

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));

DB();

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
