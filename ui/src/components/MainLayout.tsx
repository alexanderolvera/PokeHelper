import React from 'react';
import Navbar from '@/components/Navbar.tsx';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div>
      <div className="mb-10">
        <Navbar />
      </div>
      <div className="flex justify-center w-full mb-10">
        <div className="w-3/4 md:w-1/2 flex flex-col gap-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
