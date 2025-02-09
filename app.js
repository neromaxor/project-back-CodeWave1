import express from "express";
import cors from "cors";
import "dotenv/config";
import "./db/db.js";
import boardRouter from "./routes/boardRouter.js";
import usersRouter from "./routes/usersRouter.js";
import columnsRouter from "./routes/columnsRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/boards", boardRouter);
app.use("/users", usersRouter);
app.use("/api/columns", columnsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json(message);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
