import React from 'react';
import Navbar from '@/components/Navbar.tsx';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div>
      <div className="mb-10">
        <Navbar />
      </div>
      <div className="flex justify-center w-full">
        <div className="w-1/2 flex flex-col gap-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
