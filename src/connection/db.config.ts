import { DataSource } from "typeorm"

const myDataSource = new DataSource({
    type: "mongodb",
    host: "0.0.0.0",
    port: 27017,
    database: "Todo",
    logging: true,
    entities: ["./src/models/*.ts","./src/models/*.js"]
})

export const entityManager = myDataSource.manager;

const Connections = () => {
    myDataSource.initialize()
    .then(() => {
        console.log("Connection initialized ::")
    })
    .catch((error) => {
        console.log("Connection error", error);
    })
}

export default Connections;