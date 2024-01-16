import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/buttons/Button.tsx';
import { PokeHelperService } from '@/services/api';
import { useRecoilState } from 'recoil';
import currentUserIdAtom from '@/atoms/currentUserId.atom.ts';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  userName: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [, setCurrentUserId] = useRecoilState(currentUserIdAtom);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (values) => {
    try {
      const userId = await PokeHelperService.putApiLogin({ name: values.userName });
      setCurrentUserId(userId);
      toast.success(`Welcome ${values.userName}`);
      navigate('/');
    } catch (e) {
      toast.error('Failed to login');
    }
  };

  return (
    <form className="flex flex-col gap-5 w-60" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('userName')}
        placeholder="User Name"
        className="bg-gray-100 p-2 rounded-lg"
      />
      <Button label="Login" type="submit" disabled={isSubmitting} />
    </form>
  );
};

export default LoginForm;
