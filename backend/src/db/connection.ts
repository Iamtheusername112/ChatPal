import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
  try {
    const mongodbUrl = process.env.MONGODB_URL as string; // Type assertion
    await connect(mongodbUrl);
  } catch (error) {
    console.log(error);
    throw new Error("Could not Connect To MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Could not Disconnect From MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };
