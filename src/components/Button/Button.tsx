/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren, useMemo } from 'react';
import { Link } from 'react-router-dom';
import style from './button.module.scss';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  variant: 'primary' | 'secondary' | 'tertiary';
  isLink?: boolean;
  linkTo?: string;
}

const Button = (props: PropsWithChildren<Props>): React.ReactElement => {
  const {
    variant,
    children,
    isLink,
    className: omit,
    linkTo,
    ...other
  } = props;

  const classNames = useMemo(
    () => [style.button_primary, style.button_secondary, style.button_tertiary],
    []
  );

  const className = useMemo(
    () =>
      [style.button, ...classNames.filter((c) => c.includes(variant))].join(
        ' '
      ),
    [variant, classNames]
  );

  return isLink ? (
    <Link to={`/${linkTo}`} className={className}>
      {children}
    </Link>
  ) : (
    <button type="button" className={className} {...other}>
      {children}
    </button>
  );
};

export default Button;
