import express, { Express, Request, Response, Application } from "express";
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import artisteRoutes from "./routes/artiste"
import consumerRoutes from "./routes/consumer"
import plannerRoutes from "./routes/event_planner"
import eventRoutes from "./routes/event"

//For env File
dotenv.config();

/*CONFIGURATION */
const app: Application = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*ROUTES*/
app.use("/artistes", artisteRoutes);
app.use("/consumers", consumerRoutes);
app.use("/planners", plannerRoutes);
app.use("/events", eventRoutes);

/*MONGOOSE SETUP*/
const PORT = process.env.PORT || 8000;
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
