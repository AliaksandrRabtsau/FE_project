import { UsersActionsTypes, UsersActions } from './../actions/users.actions';
import { initialUserState, UserState } from './../state';

import { User } from './../../model/user';
// import { Map } from 'immutable';


export function userReducer(state = initialUserState, action: UsersActions): UserState {

  switch (action.type) {

    case UsersActionsTypes.GET_USER: {
      return {
        ...state,
        loading: true
      };
    }
    // case UsersActionsTypes.GET_USER: {
    //   return Map(state)
    //     .set('loading', true)
    //     .set('loaded', false)
    //     .toJS();
    // }

    case UsersActionsTypes.GET_USER_SUCCESS: {
      const data = <User>action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case UsersActionsTypes.GET_USER_ERROR: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case UsersActionsTypes.LOGOUT_USER: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case UsersActionsTypes.LOGOUT_USER_SUCCESS: {
      const data = {};
      return {
        ...state,
        loading: true,
        loaded: false,
        data
      };
    }

    case UsersActionsTypes.LOGOUT_USER_ERROR: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case UsersActionsTypes.FORGOT_USER_PASSWORD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case UsersActionsTypes.FORGOT_USER_PASSWORD_SUCCESS: {
      const data = <User>action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case UsersActionsTypes.FORGOT_USER_PASSWORD_ERROR: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case UsersActionsTypes.UPDATE_CURRENT_USER: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case UsersActionsTypes.UPDATE_CURRENT_USER_SUCCESS: {
      const data = <User>action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case UsersActionsTypes.UPDATE_CURRENT_USER_ERROR: {
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

    default: {
      return state;
    }
  }
}
