import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

const port = process.env.PORT || 1700;

// connections and listeners

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Server is running on http:/localhost: ${port} and connected to the database`
      );
    });
  })
  .catch((err) => console.log(err));
