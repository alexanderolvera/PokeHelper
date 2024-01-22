import { createBrowserRouter } from 'react-router-dom';
import HomeView from '@/views/HomeView.tsx';
import MainLayout from '@/components/MainLayout.tsx';
import LoginView from '@/views/LoginView.tsx';
import DetailView from '@/views/DetailView.tsx';
import FavoritesView from '@/views/FavoritesView.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomeView />
      },
      {
        path: 'auth/login',
        element: <LoginView />
      },
      {
        path: 'pokemon/:name',
        element: <DetailView />
      },
      {
        path: 'favorites',
        element: <FavoritesView />
      }
    ]
  }
]);

export default router;
