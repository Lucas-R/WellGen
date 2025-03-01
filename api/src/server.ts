import express from "express";
import { conn } from "./database/config/conn";
import initRoutes from "./routes/initRoutes";
import userRoutes from "./routes/userRouts";

const server = express();

const HOST = process.env.SERVER_HOST!;
const PORT = Number(process.env.SERVER_PORT)!;

conn.initialize()
    .then(() => {
        console.log("Database initialized!");

        server.use(express.json());

        server.use("/", initRoutes);
        server.use("/user", userRoutes);

        server.listen(PORT, HOST, () => console.log("Server is running..."));
    })
    .catch((err) => {
        console.error("Error database initialization:", err);
    });
