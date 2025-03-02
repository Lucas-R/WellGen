import { Router, Request, Response } from "express";

import CreateController from "../controllers/user/CreateController";
import FindController from "../controllers/user/findController";
import FindOneController from "../controllers/user/FindOneController";
import UpdateController from "../controllers/user/UpdateController";
import DeleteController from "../controllers/user/DeleteController";

const userRoutes = Router();

userRoutes.post('/', async (req: Request, res: Response): Promise<void> => {
    return await new CreateController().handle(req, res);
});

userRoutes.get('/', async (req: Request, res: Response): Promise<void> => {
    return await new FindController().handle(req, res);
});

userRoutes.get('/:id', async (req: Request, res: Response): Promise<void> => {
    return await new FindOneController().handle(req, res);
});

userRoutes.put('/:id', async (req: Request, res: Response): Promise<void> => {
    return await new UpdateController().handle(req, res);
});

userRoutes.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    return await new DeleteController().handle(req, res);
});


export default userRoutes;