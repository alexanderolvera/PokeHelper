import React from 'react';
import LoginForm from '@/components/auth/LoginForm.tsx';

const LoginView: React.FC = () => {
  return (
    <div className="flex justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginView;
