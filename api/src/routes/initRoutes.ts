import { Router, Request, Response } from "express";

const initRoutes = Router();

initRoutes.get("/", (req: Request, res: Response) => {
    res.status(200).send("Bem vindo a WellGen API");
});

export default initRoutes;