import { createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit';
import { TaskPayload, type TaskState as State, Task } from '@/types';

export const taskAdapter = createEntityAdapter<Task>();

export const initialState: State = taskAdapter.getInitialState({
  task: null,
  loading: false,
  error: false
});

const taskSlice = createSlice({
  name: 'taskTemplate',
  initialState,
  reducers: {
    getAllTasks: (state: State) => {
      state.loading = true;
      state.error = false;
    },
    getAllTasksSuccess: (state: State, action: PayloadAction<Task[]>) => {
      state = taskAdapter.setAll(state, action.payload);
    },
    getById: (state: State, action: PayloadAction<TaskPayload>): void => {
      state.loading = true;
      state.error = false;
    },
    getByIdSuccess: (state: State, action: PayloadAction<Task>): void => {
      state.loading = false;
      state.error = false;
    },
    getByIdError: (state: State, action: PayloadAction<Task>): void => {
      state.loading = false;
      state.error = true;
    },
    update: (state: State, action: PayloadAction<TaskPayload>): void => {
      state.loading = false;
      state.error = false;
    },
    updateSuccess: (state: State, action: PayloadAction<Task>): void => {
      state.loading = false;
      state.error = false;
    },
    updateError: (state: State, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = true;
    }
  }
});

export const taskActions = taskSlice.actions;

export default taskSlice.reducer;
