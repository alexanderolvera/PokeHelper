import React from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit';
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
  to?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled,
  to,
  className
}) => {
  if (to) {
    return (
      <NavLink
        className={twMerge(
          cx('p-2 text-white text-lg shadow bg-neutral-600 rounded', {
            'hover:bg-neutral-500': !disabled,
            'bg-neutral-400 pointer-events-none': disabled
          }),
          className
        )}
        to={to}>
        {label}
      </NavLink>
    );
  }
  return (
    <button
      className={cx('p-2 text-white text-lg shadow bg-neutral-600 rounded', {
        'hover:bg-neutral-500': !disabled,
        'bg-neutral-400': disabled
      })}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
