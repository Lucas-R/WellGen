import { User } from "../entities/user.entity";
import { conn } from "../config/conn";
import { UserProps } from "../../schemas/user.schema";
import { Repository } from "typeorm";

export const UserRepository: Repository<UserProps> = conn.getRepository(User);