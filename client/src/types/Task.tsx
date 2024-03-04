import { PriorityEnum, StatusEnum } from '../enums/enums';
import { EntityState } from '@reduxjs/toolkit';

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
  loading: boolean;
  error: boolean;
} & EntityState<Task, string>;
