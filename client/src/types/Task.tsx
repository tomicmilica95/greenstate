import { PriorityEnum, StatusEnum } from '@/enums';

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: PriorityEnum;
  status: StatusEnum;
};

export type TaskPayload = {
  title: string;
  description: string;
  priority: PriorityEnum;
  status: StatusEnum;
};

export type TaskState = {
  task: Task | null;
  loading: boolean;
  error: boolean;
};
