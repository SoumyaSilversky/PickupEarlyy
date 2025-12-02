import store from '.';
import { LoginPayload } from '../types/apiResponseTypes';

export type InitialState = {
  user: LoginPayload | null;
};

export type RootState = ReturnType<typeof store.getState>;
