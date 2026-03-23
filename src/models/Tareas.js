import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Tarea = sequelize.define(
  "tareas",
  {
    titulo: { type: DataTypes.STRING, allowNull: false },
    descripcion: DataTypes.STRING,
    completada: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  },
);
