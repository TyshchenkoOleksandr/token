import React, { FC } from 'react';
import axios from 'axios';
import { configure } from 'axios-hooks';

// export const API_URL = 'http://localhost:5000/api'

export const AxiosClient: FC = ({ children }) => {

  const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/api',
  });

  instance.interceptors.request.use((config) => {
    const interceptorConfig = { ...config };
    interceptorConfig.headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };

    return interceptorConfig;
  });

  configure({ axios: instance, cache: false });

  return (
    <>
      {children}
    </>
  );
};
