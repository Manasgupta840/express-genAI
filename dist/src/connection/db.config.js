"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityManager = void 0;
const typeorm_1 = require("typeorm");
const myDataSource = new typeorm_1.DataSource({
    type: "mongodb",
    host: "0.0.0.0",
    port: 27017,
    database: "Todo",
    logging: true,
    entities: ["./src/models/*.ts", "./src/models/*.js"]
});
exports.entityManager = myDataSource.manager;
const Connections = () => {
    myDataSource.initialize()
        .then(() => {
        console.log("Connection initialized ::");
    })
        .catch((error) => {
        console.log("Connection error", error);
    });
};
exports.default = Connections;
