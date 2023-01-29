import './index.css';

import React from 'react';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './App';
import { apiSlice } from './features/api/apiSlice';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ApiProvider api={apiSlice}>
        <App />
      </ApiProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>
);
