import { User, UserPayload, UserState } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: UserState = {
  user: null,
  loading: false,
  error: false
};

const userSlice = createSlice({
  name: 'userTemplate',
  initialState,
  reducers: {
    signup: (state: UserState, action: PayloadAction<UserPayload>) => {
      state.loading = true;
    },
    signupSuccess: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
    },
    signupError: (state: UserState, action: PayloadAction<boolean>) => {
      state.loading = false;
    }
  }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
