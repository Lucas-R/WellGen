import { Request, Response } from "express";
import UpdateService from "../../services/user/UpdateService";

class UpdateController{
    async handle(req: Request, res: Response) {
        const { id, body } = {
            id: req.params.id,
            body: Object.keys(req.body).length > 0 ? req.body : null
        };

        
        try { 
            const update = await new UpdateService().execute(id, body);
            if(!!body) {
                res.status(204).send(update);
            } else {
                res.status(409).send(false);
            }
        } catch (err) {
            res.status(500).send({error: "Internal Server Error"});
        }
    }
}

export default UpdateController;