import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './../state';
import { AllUsersState } from './../state';

const getUserData = (state: UserState) => state.data;
const getUsersData = (state: AllUsersState) => state.data;

export const getUserState = createFeatureSelector<UserState>('user');
export const getUsersState = createFeatureSelector<AllUsersState>('users');

export const getUser = createSelector(getUserState, getUserData);
export const getAllUsers = createSelector(getUsersState, getUsersData);

// export const getUsersError = createSelector(getUserState, getError);
