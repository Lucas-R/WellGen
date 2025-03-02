import { Request, Response } from "express";
import FindOneService from "../../services/user/FindOneService";

class FindOneController{
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await new FindOneService().execute(id);
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send({error: "Internal Server Error"});
        }
    }
}

export default FindOneController;