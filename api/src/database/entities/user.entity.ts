import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn 
} from 'typeorm';
import { UserProps } from '../../schemas/user.schema';

@Entity('user')
export class User implements UserProps{
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  birth?: Date;

  @Column()
  birth_place?: string;

  @Column()
  death?: Date;

  @Column({
    type: 'enum',
    enum: ['male', 'female'],
  })
  gender?: 'male' | 'female';

  @Column()
  phone?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}