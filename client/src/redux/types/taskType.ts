export const GET_TASKS = 'GET_TASKS';
export const GET_ONE_TASK = 'GET_ONE_TASK';

export interface TasksRequest {
  type: typeof GET_TASKS;
}

export interface GetOneTask {
  type: typeof GET_ONE_TASK;
  payload: any;
}

export type TaskAction = TasksRequest | GetOneTask;
