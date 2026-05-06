import express from "express";
import cors from "cors";

import sequelize, { connectDatabase } from "./config/database";
import "./models/Scooter";

import routes from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

const startServer = async () => {
  try {
    await connectDatabase();
    console.log("Database connected");

    await sequelize.sync();
    console.log("Tables synchronized");

    app.listen(port, () => {
      console.log(`Scooter Microservice running on port ${port}`);
    });
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

startServer();
