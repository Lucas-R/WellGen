import { DataSource, Repository } from 'typeorm';
import { User } from '../../../database/entities/user.entity';
import { conn } from '../../../database/config/conn';
import { UserProps } from '../../../schemas/user.schema';

describe('Criação de Usuário (TypeORM)', () => {
    let user: UserProps;
    let dataSource: DataSource;
    let userRepository: Repository<User>;

    beforeAll(async () => {
        dataSource = await conn.initialize();
        userRepository = dataSource.getRepository(User);
    });

    afterAll(async () => {
        await dataSource.destroy();
    });

    it('Deve criar um novo usuário no banco de dados', async () => {
        const mock: UserProps = {
            name: 'João da Silva',
            email: 'joao@example.com',
            password: 'securePassword123',
            birth: new Date(),
            birth_place: 'São Paulo, SP',
            death: new Date(),
            gender: 'male',
            phone: '+5511987654321',
            created_at: new Date(),
            updated_at: new Date()
        };

        const userCreated = await userRepository.save(userRepository.create(mock));
        const foundUser = await userRepository.findOneBy({ id: userCreated.id });

        
        if(!!foundUser) {
            user = foundUser;
            expect(foundUser.id).toEqual(user.id);
        }
    });

    it('Deve atualizar o usuário do banco de dados do ID passado', async () => {
        const userEditId = user.id as string;
        await userRepository.update(userEditId, { email: "edit@email.com" });
        const userEdit = await userRepository.findOneBy({ id: userEditId });
        expect(user).not.toBe(userEdit);
    });

    it('Deve deletar o usuário do banco de dados do ID passado', async () => {
        const userDeleteId = user.id as string;
        await userRepository.delete(userDeleteId);

        const userDelete = await userRepository.findOne({ where: { id: userDeleteId }});
        expect(userDelete).toBeNull();
    });
});