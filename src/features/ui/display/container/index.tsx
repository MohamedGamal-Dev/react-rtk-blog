import React from 'react';
import classNames from 'classnames';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  center?: boolean;
  children?: React.ReactNode;
}

export const Container = ({ center, children, ...rest }: ContainerProps) => {
  const classVariation = classNames(
    'container',
    {
      'mx-auto': center,
    },
    rest.className
  );
  return <div className={classVariation}>{children}</div>;
};
