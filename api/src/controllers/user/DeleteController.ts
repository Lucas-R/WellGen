import { Request, Response } from "express";
import DeleteService from "../../services/user/DeleteService";

class DeleteController{
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const del = await new DeleteService().execute(id);
            res.status(200).send(del);
        } catch (error) {
            res.status(500).send({error: "Internal Server Error"});
        }
    }
}

export default DeleteController;