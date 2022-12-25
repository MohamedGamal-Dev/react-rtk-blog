import React from 'react';
import classNames from 'classnames';
import { FaSyncAlt } from 'react-icons/fa';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  rounded?: boolean;
  outline?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  isLoading,
  children,
  ...rest
}: ButtonProps) => {
  const classVariation = classNames(
    'flex items-center px-3 py-1.5 border h-8',
    {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-transparent': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
      'opacity-80': isLoading,
    },
    rest.className
  );

  return (
    <button className={classVariation} disabled={isLoading} {...rest}>
      {isLoading ? <FaSyncAlt className="animate-spin" /> : children}
    </button>
  );
};
