import { UserRepository } from "../../database/repositories/user.repository";

class FindOneService {
    async execute(id: string) {
        const user = await UserRepository.findOne({where: { id }});
        return user;
    }
}

export default FindOneService;