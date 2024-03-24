import { createEffect, createEvent, createStore } from 'effector';
import { useStoreMap, useUnit } from 'effector-react';
import { User } from '@entities/user/types';
import { auth, ApiUser, AuthRequest } from '@shared/api/bet4skill';

const initAuthFx = createEffect(async () => await auth.checkAuth());
const authFx = createEffect(async (request: AuthRequest) => auth.auth(request));

const updateStore = (state: User | null, data: ApiUser | null): void | User | null => {
  if (data === null) {
    return null;
  }

  return { ...state, id: data.id, balance: 100, currency: data.currency };
};

const updateBalanceStore = (state: User | null, payload: number): User | null => {
  if (state === null) {
    return null;
  }

  return { ...state, balance: payload };
};

const setBalance = createEvent<number>();

const $user = createStore<User | null>(null)
  .on([initAuthFx.doneData, authFx.doneData], updateStore)
  .on(setBalance, updateBalanceStore);
const $isLoading = initAuthFx.pending;

const useIsUserAuth = (): boolean =>
  useStoreMap({
    store: $user,
    keys: [],
    fn: (state: User | null) => state !== null,
  });

const useUser = (): User | null => useUnit($user);
const useIsLoading = (): boolean => useUnit($isLoading);

export const events = { setBalance };
export const selectors = { useIsUserAuth, useUser, useIsLoading };
export const fx = { initAuthFx, authFx };
