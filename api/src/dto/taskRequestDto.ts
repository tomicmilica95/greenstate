import { PriorityEnum } from '../enums/PriorityEnum';
import { StatusEnum } from '../enums/StatusEnum';

export class TaskRequest {
  title: string;
  description: string;
  priority: PriorityEnum;
  status: StatusEnum;
}
