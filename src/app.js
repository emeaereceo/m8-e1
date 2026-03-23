import express from "express";
import "dotenv/config";
import { sequelize } from "./config/db.js";
import router from "./routes/tareas.routes.js";
import swaggerUi from "swagger-ui-express";
import { openApiDocument } from "./config/openapi.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));
app.use("/api/v1", router);

async function main() {
  try {
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error", error);
  }
}

main();
