import { UserRepository } from "../../database/repositories/user.repository";
import { UserUpdateProps } from "../../schemas/user.schema";

class UpdateService {
    async execute(id: string, body: UserUpdateProps) {
        const update = await UserRepository.update(id, body);
        return !!update.affected;
    }
}

export default UpdateService;