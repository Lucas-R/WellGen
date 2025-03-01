import express from "express";
import initRoutes from "./routes/initRoutes";
import { conn } from "./database/config/conn";
import userRoutes from "./routes/userRouts";

const server = express();

conn.initialize()
    .then(() => {
        console.log("Database initialized!");

        server.use(express.json());

        server.use("/", initRoutes);
        server.use("/user", userRoutes);

        server.listen(3000, () => console.log("Server is running..."));
    })
    .catch((err) => {
        console.error("Error database initialization:", err);
    });
