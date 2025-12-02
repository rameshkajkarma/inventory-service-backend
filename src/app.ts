import express from "express";
import itemRoutes from "./routes/item.routes";

const app = express();

app.use(express.json());

// items route
app.use("/api/items", itemRoutes);

export default app;
