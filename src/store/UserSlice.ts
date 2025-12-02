import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState, RootState } from './store.types';
import { LoginPayload } from '../types/apiResponseTypes';
const initialState: InitialState = {
  user: null,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<LoginPayload>) => {
      state.user = action.payload;
    },
    updateUserData: (state, action: PayloadAction<LoginPayload>) => {
      state.user = { ...state.user, ...action.payload };
    },
    onLogout: state => {
      state.user = null;
    },
  },
});
export const { setUserData } = UserSlice.actions;
export const UserState = (state: RootState) => state.user;
export default UserSlice.reducer;
