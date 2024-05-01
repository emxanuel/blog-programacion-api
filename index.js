/*Importaciones*/
import express from "express";
import dotenv from "dotenv";
import { databaseConnect } from "@/services/database.js";
import router from "@/routes/index.routes.js";
import cors from "cors";
dotenv.config()

/*Index*/

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', router)

const desiredPort = process.env.PORT || 3000;

databaseConnect(process.env.MONGO_DB_URI)

app.listen(desiredPort, () => {
    console.log(`server listening in port ${desiredPort}`);
});