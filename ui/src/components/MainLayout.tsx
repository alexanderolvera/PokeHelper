import React from 'react';
import Navbar from '@/components/Navbar.tsx';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div>
      <div className="mb-10">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
