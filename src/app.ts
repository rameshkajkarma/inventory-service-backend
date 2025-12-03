import express from "express";
import cors from "cors";
import itemRoutes from "./routes/item.routes";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/items", itemRoutes);

export default app;
