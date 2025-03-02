import { Request, Response } from "express";
import FindService from "../../services/user/FindService";

class FindController{
    async handle(req: Request, res: Response) {
        try {
            const users = await new FindService().execute();
            res.status(200).send(users);
        } catch (error) {
            res.status(500).send({error: "Internal Server Error"});
        }
    }
}

export default FindController;