import { BASE_URL } from '@shared/api/bet4skill/base';
import { ApiUser, AuthRequest } from '@shared/api/bet4skill/types';

export const checkAuth = async (): Promise<ApiUser | null> => {
  const response = await fetch(BASE_URL + 'auth/me', {
    method: 'GET',
    credentials: 'include',
  });

  if (!response.ok) {
    return null;
  }

  return await response.json();
};

export const auth = async (request: AuthRequest): Promise<ApiUser | null> => {
  const response = await fetch(BASE_URL + 'client-login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    return null;
  }

  return await response.json();
};
