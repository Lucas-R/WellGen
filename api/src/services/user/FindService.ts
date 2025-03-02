import { UserRepository } from "../../database/repositories/user.repository";

class FindService {
    async execute() {
        const users = await UserRepository.find();
        return users;
    }
}

export default FindService;