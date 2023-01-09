import React from 'react';
import classNames from 'classnames';

export const CardPanel = ({ inner, children, ...rest }: any) => {
  classNames(
    'mx-auto border border-dark-off bg-dark-primary px-1 pt-1',
    rest.className
  );
  return <div {...rest}>{children}</div>;
};

export const CardFooter = ({ children, ...rest }: any) => {
  classNames('flex items-center justify-between py-3 px-6', rest.className);
  return <div {...rest}>{children}</div>;
};

export const CardHeader = ({ children, ...rest }: any) => {
  classNames(
    'text-2xl font-bold text-light-secondary hover:text-primary-main hover:underline',
    rest.className
  );
  return <div {...rest}>{children}</div>;
};
