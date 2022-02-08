import useAxios from 'axios-hooks';

import { api } from '../configs/urls/api';
import { IUseAuth } from './useAuth.interface';

export const useAuth = (): IUseAuth => {
  const [{}, loginRequest] = useAxios(
    {
      url: api.login,
      method: 'POST',
    },
    { manual: true }
  );

  const [{}, registrationRequest] = useAxios(
    {
      url: api.registration,
      method: 'POST',
    },
    { manual: true }
  );

  const [{}, logoutRequest] = useAxios(
    {
      url: api.logout,
      method: 'POST',
    },
    { manual: true }
  );

  const [{ loading: checkAuthLoading }, checkAuthRequest] = useAxios(
    {
      url: api.refresh,
      method: 'GET',
    },
    { manual: true }
  );

  return {
    checkAuthLoading,
    loginRequest,
    registrationRequest,
    logoutRequest,
    checkAuthRequest,
  };
};
