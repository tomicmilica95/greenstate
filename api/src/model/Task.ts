import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { StatusEnum } from '../enums/StatusEnum';
import { PriorityEnum } from '../enums/PriorityEnum';
import { User } from './User';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: PriorityEnum,
    default: PriorityEnum.MEDIUM,
  })
  priority: PriorityEnum;

  @Column({
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.IN_PROGRESS,
  })
  status: StatusEnum;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
