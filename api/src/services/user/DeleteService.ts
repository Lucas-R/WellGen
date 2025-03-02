import { UserRepository } from "../../database/repositories/user.repository";

class DeleteService {
    async execute(id: string) {
        const del = await UserRepository.delete(id);
        return !!del.affected;
    }
}

export default DeleteService;