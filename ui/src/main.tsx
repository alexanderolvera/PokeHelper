import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { OpenAPI } from '@/services/api';

const queryClient = new QueryClient();

OpenAPI.BASE = import.meta.env.VITE_API_URL;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
