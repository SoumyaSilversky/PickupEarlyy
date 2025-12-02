export type LoginPayload = {
  name: string;
  id?: string;
  role?: 'client' | 'admin';
};
