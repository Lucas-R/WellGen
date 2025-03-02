import { Request, Response } from "express";
import UpdateService from "../../services/user/UpdateService";

class UpdateController{
    async handle(req: Request, res: Response) {
        const { id, body } = {
            id: req.params.id,
            body: req.body
        };

        
        try { 
            const update = await new UpdateService().execute(id, body);
            res.status(200).send(update);
        } catch (err) {
            res.status(500).send({error: "Internal Server Error"});
        }
    }
}

export default UpdateController;