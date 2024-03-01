import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';
import { PriorityEnum } from '../enums/PriorityEnum';
import { StatusEnum } from '../enums/StatusEnum';

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
