import express from "express";
import cors from "cors";
import itemRoutes from "./routes/item.routes";
import categoryRoutes from "./routes/category.routes";
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/items", itemRoutes);
app.use("/api/categories", categoryRoutes);

export default app;
