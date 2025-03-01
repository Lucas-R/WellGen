import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn 
} from 'typeorm';
import { UserProps } from '../../schemas/user.schema';

@Entity('user')
export class user implements UserProps{
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  email!: string;

  @Column({ nullable: true })
  password!: string;

  @Column({ type: 'date' })
  birth?: Date;

  @Column({ nullable: true })
  birth_place?: string;

  @Column({ type: 'date', nullable: true })
  death?: Date;

  @Column({
    type: 'enum',
    enum: ['male', 'female'],
  })
  gender!: 'male' | 'female';

  @Column({ nullable: true })
  phone?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}