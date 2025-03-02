import { UserProps } from "../../schemas/user.schema";
import { UserRepository } from "../../database/repositories/user.repository";
import { User } from "../../database/entities/user.entity";

class CreateService {
    async execute(body: UserProps): Promise<User> {
        const create = UserRepository.create(body);
        return await UserRepository.save(create);
    }
}

export default CreateService;