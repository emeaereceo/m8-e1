import {
  extendZodWithOpenApi,
  OpenApiGeneratorV3,
  OpenAPIRegistry,
} from "@asteasolutions/zod-to-openapi";
import z from "zod";
import { crearTareaSchema, TareaSchema } from "../schemas/tareas.schema.js";

extendZodWithOpenApi(z);

const registry = new OpenAPIRegistry();

registry.register("Tarea", TareaSchema);

registry.registerPath({
  method: "get",
  path: "/tareas",
  summary: "Obtener todas las tareas",
  responses: {
    200: {
      description: "Lista de tareas",
      content: {
        "application/json": {
          schema: z.array(TareaSchema),
        },
      },
    },
  },
});

registry.registerPath({
  method: "post",
  path: "/tareas",
  summary: "Crear tareas",
  request: {
    body: {
      content: {
        "application/json": {
          schema: crearTareaSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Tarea creada",
      content: {
        "application/json": {
          schema: TareaSchema,
        },
      },
    },
  },
});

export const openApiDocument = new OpenApiGeneratorV3(
  registry.definitions,
).generateDocument({
  openapi: "3.0.0",
  info: {
    title: "API de Tareas",
    version: "1.0.0",
  },
});
