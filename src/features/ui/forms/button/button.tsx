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
  info?: boolean;
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
  info,
  rounded,
  outline,
  isLoading,
  children,
  ...rest
}: ButtonProps) => {
  const classVariation = classNames(
    'flex items-center px-3 py-1.5 border h-8',
    {
      'border-primary-main bg-primary-main text-white': primary,
      'border-secondary-main bg-secondary-main text-white': secondary,
      'border-success-main bg-success-main text-white': success,
      'border-warning-main bg-warning-main text-white': warning,
      'border-danger-main bg-danger-main text-white': danger,
      'border-info-main bg-info-main text-white': info,
      'rounded-full': rounded,
      'bg-transparent': outline,
      'text-primary-main': outline && primary,
      'text-secondary-main': outline && secondary,
      'text-success-main': outline && success,
      'text-warning-main': outline && warning,
      'text-danger-main': outline && danger,
      'text-info-main': outline && info,
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
