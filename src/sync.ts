import sequelize, { connectDatabase } from "./config/database";
import Scooter from "./models/Scooter";

const syncDatabase = async () => {
  try {
    console.log("Loading models:", Scooter.name);

    await connectDatabase();
    console.log("Database connected!");

    await sequelize.sync({ force: true });
    console.log("Database synced!");

    await Scooter.create({
      modelo: "Xiaomi Pro 2",
      marca: "Xiaomi",
      voltaje: 36,
      autonomia: 45,
      anio: "2024",
      precio: 3200000,
      color: "Negro",
      photoUrl: "https://ejemplo.com/scooter.jpg",
    });
    console.log("Sample scooter created");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

syncDatabase();
