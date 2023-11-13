import express, { Express, Request, Response, Application } from "express";
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";

//For env File
dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(helmet());
const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Fire at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("====================================");
    console.log(`${error} did not connect`);
    console.log("====================================");
  });
