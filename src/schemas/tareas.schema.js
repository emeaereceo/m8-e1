import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const TareaSchema = z.object({
  id: z.number().openapi({ example: 1 }),
  titulo: z.string().openapi({ example: "Estudiar zod" }),
  descripcion: z.string().optional(),
  completada: z.boolean().openapi({ example: false }),
});

// CREATE
export const crearTareaSchema = z.object({
  titulo: z
    .string({ required_error: "El titulo es obligatorio" })
    .min(1, "El titulo no puede estar vacío")
    .openapi({ example: "Nueva tarea" }),
  descripcion: z.string().optional(),
  completada: z.boolean().optional().default(false),
});

// UPDATE
export const actualizarTareaSchema = z.object({
  titulo: z.string().min(1).optional(),
  descripcion: z.string().optional(),
  completada: z.boolean().default(false).optional(),
});

// PARAMS (ID)
export const idSchema = z.object({
  id: z.string().regex(/^\d+$/, "El ID debe ser numérico"),
});
