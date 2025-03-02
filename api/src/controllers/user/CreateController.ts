import { Request, Response } from "express";
import CreateService from "../../services/user/CreateService";
import { UserRepository } from "../../database/repositories/user.repository";

class CreateController{
    async handle(req: Request, res: Response) {
        const body = req.body;
        const user = await UserRepository.findOne({where: { email: body.email }});
        if(!user) {
            const create = await new CreateService().execute(body);
            res.status(201).send(create);
        } else {
            res.status(409).send(user);
        }
    }
}

export default CreateController;