import { User, UserPayload, UserState } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState: UserState = {
  user: null,
  loading: false,
  error: false
};

const userSlice = createSlice({
  name: 'userTemplate',
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<UserPayload>) => {
      state.loading = true;
    },
    loginSuccess: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = true;
      state.error = false;
    },
    loginError: (state: UserState, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = true;
    },
    signup: (state: UserState, action: PayloadAction<UserPayload>) => {
      state.loading = true;
      state.error = false;
    },
    signupSuccess: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
    },
    signupError: (state: UserState, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = true;
    }
  }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
