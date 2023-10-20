import express from "express";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import { config } from "dotenv";

const app = express();

// Use the 'config' method to load the environment variables from the .env file
config();

//Middlewares
app.use(express.json());
app.use(morgan("dev")); //Use 'morgan' for request logging

app.use("/api/v1", appRouter);

// Routes

app.get("/", (req, res) => {
  res.json("Hello world");
});

export default app;
