import { Request, Response } from "express";
import CreateService from "../../services/user/CreateService";

class CreateController{
    async handle(req: Request, res: Response) {
        const body = req.body;
        try {
            const user = await new CreateService().execute(body);
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send({error: "Internal Server Error"});
        }
    }
}

export default CreateController;