import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
    res.status(200).json({ data: "hello world" });
})

app.listen(3000);