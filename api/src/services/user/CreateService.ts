import { UserRepository } from "../../database/repositories/user.repository";
import { UserProps } from "../../schemas/user.schema";

class CreateService {
    async execute(body: UserProps) {
        const user = UserRepository.create(body);
        await UserRepository.save(user);
        return user;
    }
}

export default CreateService;