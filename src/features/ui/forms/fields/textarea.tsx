import classNames from 'classnames';
import { FiledProps } from '@/features/ui/forms/fields';

export const TextareaFiled = ({
  variant,
  rounded,
  outline,
  ...rest
}: FiledProps) => {
  const primary = variant === 'primary';
  const secondary = variant === 'secondary';
  const success = variant === 'success';
  const warning = variant === 'warning';
  const danger = variant === 'danger';
  const info = variant === 'info';

  const classVariation = classNames(
    'w-full border-2 p-2.5 text-lg outline-none',
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
      'opacity-50 text-light-off': rest.disabled,
    },
    rest.className
  );
  return (
    <>
      <textarea className={classVariation} {...rest}></textarea>
    </>
  );
};
