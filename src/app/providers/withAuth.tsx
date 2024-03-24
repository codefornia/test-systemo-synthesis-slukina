import { ReactNode, useEffect, useRef } from 'react';
import { userModel } from '@entities/user';

export const withAuth = (component: () => ReactNode) => () => {
  const isLoading = userModel.selectors.useIsLoading();
  const isFetching = useRef(false);

  useEffect(() => {
    if (isFetching.current) {
      return;
    }

    isFetching.current = true;

    userModel.fx.initAuthFx(undefined);
  }, []);

  if (isLoading) {
    return null;
  }

  return component();
};
