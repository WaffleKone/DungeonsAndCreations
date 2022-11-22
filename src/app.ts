import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { name, version } from "../package.json";
import errorHandler from "./middleware/errorHandler";
import requestLogger from "./middleware/requestLogger";
import logger from "./services/logger";
import api from "./routes/api";
import path from "path";

dotenv.config();

const app: Express = express();

// MIDDLEWARE
app.use(express.json());
app.use(requestLogger);
app.use(errorHandler);
app.use(express.static(path.join(__dirname, "../../public")));

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("index.html");
  } catch (error) {
    next(error);
  }
});

//app.use("/api", api);

app.listen(process.env.PORT, () => {
  logger.info(
    `${name} v${version} is starting in ${process.env.NODE_ENV} mode`
  );
  logger.info(`Server is running at https://localhost:${process.env.PORT}`);
  logger.info(`logging is set to ${logger.level}`);
});
