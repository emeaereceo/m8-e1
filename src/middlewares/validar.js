export const validarBody = (schema) => (req, res, next) => {
  try {
    const data = schema.parse(req.body);
    req.body = data;
    next();
  } catch (error) {
    return res.status(400).json({
      ok: false,
      errores: error.errors,
    });
  }
};

export const validarParams = (schema) => (req, res, next) => {
  try {
    const data = schema.parse(req.params);
    req.params = data;
    next();
  } catch (error) {
    return res.status(400).json({
      ok: false,
      errores: error.errors,
    });
  }
};
