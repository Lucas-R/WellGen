import express from "express";
import initRoutes from "./routes/initRoutes";

const server = express();

server.use(express.json());

server.use("/", initRoutes);

server.listen(3000, () => console.log("Server is running..."));