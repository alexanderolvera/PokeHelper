import React from 'react';
import Button from '@/components/buttons/Button.tsx';

const handleLogoutClick = () => {
  location.reload();
};

const LogoutButton: React.FC = () => {
  return <Button label="Logout" onClick={handleLogoutClick} />;
};

export default LogoutButton;
