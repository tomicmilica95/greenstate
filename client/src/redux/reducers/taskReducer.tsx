import { createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit';
import { TaskPayload, TaskState, Task } from '@/types';

export const taskAdapter = createEntityAdapter<Task>();

export const initialState: TaskState = taskAdapter.getInitialState({
  task: null,
  loading: false,
  error: false
});

const taskSlice = createSlice({
  name: 'taskTemplate',
  initialState,
  reducers: {
    getAllTasks: (state: TaskState) => {
      state.loading = true;
      state.error = false;
    },
    getAllTasksSuccess: (state: TaskState, action: PayloadAction<Task[]>) => {
      state = taskAdapter.setAll(state, action.payload);
    },
    getAllTasksError: (state: TaskState, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = true;
    },
    create: (state: TaskState, action: PayloadAction<TaskPayload>): void => {
      state.loading = false;
      state.error = false;
    },
    createSuccess: (state: TaskState, action: PayloadAction<Task[]>) => {
      state = taskAdapter.setMany(state, action.payload);
    },
    createError: (state: TaskState, action: PayloadAction<boolean>): void => {
      state.loading = false;
      state.error = false;
    },
    getById: (state: TaskState, action: PayloadAction<TaskPayload>): void => {
      state.loading = true;
      state.error = false;
    },
    getByIdSuccess: (state: TaskState, action: PayloadAction<Task>): void => {
      state.loading = false;
      state.error = false;
    },
    getByIdError: (state: TaskState, action: PayloadAction<Task>): void => {
      state.loading = false;
      state.error = true;
    },
    update: (state: TaskState, action: PayloadAction<number>): void => {
      state.loading = false;
      state.error = false;
    },
    updateSuccess: (state: TaskState, action: PayloadAction<Task>): void => {
      state = taskAdapter.updateOne(state, {
        id: action.payload.id,
        changes: { ...action.payload }
      });
      state.error = false;
      state.loading = false;
    },
    updateError: (state: TaskState, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = true;
    },
    delete: (state: TaskState, action: PayloadAction<string>): void => {
      state = taskAdapter.removeOne(state, action.payload);
      state.loading = false;
      state.error = false;
    },
    deleteSuccess: (state: TaskState, action: PayloadAction<Task>): void => {
      state = taskAdapter.updateOne(state, {
        id: action.payload.id,
        changes: { ...action.payload }
      });
      state.error = false;
      state.loading = false;
    },
    deleteError: (state: TaskState, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = true;
    }
  }
});

export const taskActions = taskSlice.actions;

export default taskSlice.reducer;
