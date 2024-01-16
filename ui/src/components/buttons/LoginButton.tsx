import React from 'react';
import Button from '@/components/buttons/Button.tsx';

const LoginButton: React.FC = () => {
  return <Button label="Login" to="/auth/login" />;
};

export default LoginButton;
