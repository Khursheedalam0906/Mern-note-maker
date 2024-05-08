import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { DBconnection } from "./database/db.js";
import router from "./routes/routes.js";

const PORT = 8000;
DBconnection();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
