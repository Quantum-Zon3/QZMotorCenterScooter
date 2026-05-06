import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Scooter extends Model {
  public id!: number;
  public modelo!: string;
  public marca!: string;
  public voltaje!: number;
  public autonomia!: number;
  public año!: string;
  public precio!: number;
  public color!: string;
  public photoUrl!: string;
}

Scooter.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    voltaje: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    autonomia: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    año: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "scooter",
    timestamps: false,
  },
);

export default Scooter;
