import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
const databaseName = process.env.DB_NAME as string | undefined;
const databaseUser = process.env.DB_USER as string | undefined;
const databasePassword = process.env.DB_PASSWORD as string | undefined;
const databaseHost = process.env.DB_HOST;
const databasePort = Number(process.env.DB_PORT ?? 5432);
const databaseSsl = process.env.DB_SSL === "true";

const sequelize = databaseUrl
  ? new Sequelize(databaseUrl, {
      dialect: "postgres",
      logging: false,
      dialectOptions: databaseSsl
        ? {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          }
        : undefined,
    })
  : new Sequelize(databaseName ?? "", databaseUser ?? "", databasePassword ?? "", {
        host: databaseHost,
        port: databasePort,
        dialect: "postgres",
        logging: false,
        dialectOptions: databaseSsl
          ? {
              ssl: {
                require: true,
                rejectUnauthorized: false,
              },
            }
          : undefined,
  });

export const connectDatabase = async (): Promise<void> => {
  await sequelize.authenticate();
  console.log("Conexion a PostgreSQL con Sequelize establecida correctamente.");
};

export default sequelize;
