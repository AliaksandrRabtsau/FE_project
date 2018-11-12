import { UsersActionsTypes, UsersActions } from './../actions/users.actions';
import { initialAllUsersState, AllUsersState } from './../state';
//
import { User } from './../../model/user';

export function allUsersReducer(state = initialAllUsersState, action: UsersActions): AllUsersState {
  switch (action.type) {

    case UsersActionsTypes.GET_USERS: {
      return {
        ...state,
        loading: true
      };
    }

    case UsersActionsTypes.GET_USERS_SUCCESS: {
      const data = <User[]>action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }
    case UsersActionsTypes.GET_USERS_ERROR: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case UsersActionsTypes.CREATE_USER:
    case UsersActionsTypes.UPDATE_USER:
    case UsersActionsTypes.DELETE_USER: {
      return {
        ...state
      };
    }

    case UsersActionsTypes.CREATE_USER_SUCCESS:
    case UsersActionsTypes.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        loaded: true,
      };
    }

    case UsersActionsTypes.CREATE_USER_ERROR:
    case UsersActionsTypes.UPDATE_USER_ERROR:
    case UsersActionsTypes.DELETE_USER_ERROR: {
      const error = action.payload;
      return {
        ...state,
        error
      };
    }

    default: {
      return state;
    }
  }
}
