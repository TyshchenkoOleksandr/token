import React, { FC, createContext, useMemo, useState, useEffect, useCallback } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { IUser } from '../../shared/interfaces/user.interface';

const UserContext = createContext<any | undefined>(undefined);

const UserProvider: FC = ({ children }) => {
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);
  const [user, setUser] = useState<IUser>({
    id: '',
    email: '',
    isAuth: false,
    isActivated: false,
  });
  const {
    checkAuthLoading,
    loginRequest,
    checkAuthRequest,
    logoutRequest,
    registrationRequest,
  } = useAuth();

  const checkAuth = async (): Promise<void> => {
    try {
      const response = await checkAuthRequest();
      localStorage.setItem('token', response.data.accessToken);
      setUser({
        ...response.data.user,
        isAuth: true,
      });
      setIsFirstLoading(false);
    } catch (error) {
      setIsFirstLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = useCallback( async (email: string, password: string): Promise<void> => {
    const response = await loginRequest({
      data: {
        email,
        password,
      },
    });
    const newUserData = {
      ...response.data.user,
      isAuth: true,
    };
    setUser(newUserData);
  }, []);

  const registration = useCallback( async (email: string, password: string): Promise<void> => {
    const response = await registrationRequest({
      data: {
        email,
        password,
      },
    });
    const newUserData = {
      ...response.data.user,
      isAuth: true,
    };
    setUser(newUserData);
  }, []);

  const logout = useCallback( async (): Promise<void> => {
    await logoutRequest();
    const newUserData = {
      id: '',
      email: '',
      isAuth: false,
      isActivated: false,
    };
    setUser(newUserData);
  }, []);

  const value = useMemo(() => {
    return {
      user,
      checkAuthLoading,
      isFirstLoading,
      login,
      logout,
      registration,
    };
  }, [
    user,
    checkAuthLoading,
    isFirstLoading,
  ]);

  return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
