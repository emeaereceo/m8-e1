import express from "express";
import {
  obtenerTareas,
  crearTarea,
  obtenerTareaPorId,
  eliminarTarea,
  actualizarTarea,
} from "../controllers/tareas.controller.js";

import {
  crearTareaSchema,
  actualizarTareaSchema,
  idSchema,
} from "../schemas/tareas.schema.js";

import { validarBody, validarParams } from "../middlewares/validar.js";

const router = express.Router();

router.get("/tareas", obtenerTareas);

router.post("/tareas", validarBody(crearTareaSchema), crearTarea);

router.get("/tareas/:id", validarParams(idSchema), obtenerTareaPorId);

router.delete("/tareas/:id", validarParams(idSchema), eliminarTarea);

router.put(
  "/tareas/:id",
  validarParams(idSchema),
  validarBody(actualizarTareaSchema),
  actualizarTarea,
);

export default router;
