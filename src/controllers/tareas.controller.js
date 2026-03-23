import { Tarea } from "../models/Tareas.js";

// GET ALL
export const obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.findAll({
      attributes: ["id", "titulo", "descripcion", "completada"],
    });

    res.status(200).json({ ok: true, data: tareas });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

// CREATE
export const crearTarea = async (req, res) => {
  try {
    const tarea = await Tarea.create(req.body);

    res.status(201).json({ ok: true, data: tarea });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

// GET BY ID
export const obtenerTareaPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const tarea = await Tarea.findByPk(id);

    if (!tarea) {
      return res.status(404).json({
        ok: false,
        message: "Tarea no encontrada",
      });
    }

    res.status(200).json({ ok: true, data: tarea });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

// DELETE
export const eliminarTarea = async (req, res) => {
  try {
    const { id } = req.params;

    const tarea = await Tarea.findByPk(id);

    if (!tarea) {
      return res.status(404).json({
        ok: false,
        message: "Tarea no encontrada",
      });
    }

    await tarea.destroy();

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

// UPDATE
export const actualizarTarea = async (req, res) => {
  try {
    const { id } = req.params;

    const tarea = await Tarea.findByPk(id);

    if (!tarea) {
      return res.status(404).json({
        ok: false,
        message: "Tarea no encontrada",
      });
    }

    // 🔥 update parcial automático
    await tarea.update(req.body);

    res.status(200).json({ ok: true, data: tarea });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};
