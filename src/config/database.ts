import mysql from "mysql2/promise";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
const databaseName = process.env.DB_NAME as string;
const databaseUser = process.env.DB_USER as string;
const databasePassword = process.env.DB_PASSWORD as string;
const databaseHost = process.env.DB_HOST;
const databasePort = Number(process.env.DB_PORT ?? 3306);
const databaseSsl = process.env.DB_SSL === "true";

const sequelize = databaseUrl
  ? new Sequelize(databaseUrl, {
      dialect: "mysql",
      logging: false,
      dialectOptions: databaseSsl ? { ssl: {} } : undefined,
    })
  : new Sequelize(
      databaseName,
      databaseUser,
      databasePassword,
      {
        host: databaseHost,
        port: databasePort,
        dialect: "mysql",
        logging: false,
        dialectOptions: databaseSsl ? { ssl: {} } : undefined,
      },
    );

const ensureDatabaseExists = async (): Promise<void> => {
  if (databaseUrl) {
    return;
  }

  const connection = await mysql.createConnection({
    host: databaseHost,
    port: databasePort,
    user: databaseUser,
    password: databasePassword,
    ssl: databaseSsl ? {} : undefined,
  });

  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\``);
  } finally {
    await connection.end();
  }
};

export const connectDatabase = async (): Promise<void> => {
  await ensureDatabaseExists();
  await sequelize.authenticate();
  console.log("Conexion a MySQL con Sequelize establecida correctamente.");
};

export default sequelize;
