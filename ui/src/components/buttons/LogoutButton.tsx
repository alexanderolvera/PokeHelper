import React from 'react';
import Button from '@/components/buttons/Button.tsx';
import { useRecoilState } from 'recoil';
import currentUserIdAtom from '@/atoms/currentUserId.atom.ts';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  const [, setCurrentUserId] = useRecoilState(currentUserIdAtom);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setCurrentUserId(null);
    navigate('/');
  };

  return <Button label="Logout" onClick={handleLogoutClick} />;
};

export default LogoutButton;
