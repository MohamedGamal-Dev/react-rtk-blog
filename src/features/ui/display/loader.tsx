import classNames from 'classnames';

export const Loader = ({ size = 'h-20 w-20', ...rest }: any) => {
  const classVariation = classNames(
    'h-20 w-20 animate-spin rounded-full border-[1rem] border-t-[1rem] border-primary-main border-t-secondary-dark',
    size,
    rest.className
  );

  return (
    <>
      <div {...rest} className={classVariation}></div>
    </>
  );
};
