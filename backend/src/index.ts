import express from "express";
import { config } from "dotenv";

const app = express();

// Use the 'config' method to load the environment variables from the .env file
config();

//Middlewares
app.use(express.json());

// Routes

app.get("/", (req, res) => {
  res.json("Hello world");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http:/localhost: ${port}`);
});
