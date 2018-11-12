import { User } from './../../model/user';

export interface UserState {
  data: User;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialUserState: UserState = {
  data: {},
  loading: false,
  loaded: false,
  error: null
};
