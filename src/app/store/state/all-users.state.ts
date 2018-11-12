import { User } from './../../model/user';

export interface AllUsersState {
  data: User[];
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialAllUsersState: AllUsersState = {
  data: [],
  loaded: false,
  loading: false,
  error: null
};
