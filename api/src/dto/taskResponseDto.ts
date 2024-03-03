import { PriorityEnum } from '../enums/PriorityEnum';
import { StatusEnum } from '../enums/StatusEnum';

export class TaskResponse {
  title: string;
  description: string;
  priority: PriorityEnum;
  status: StatusEnum;
}
