import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import buttons from './button.module.scss';

type Props = {
  buttonClass: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean | undefined;
  onClick?: () => void;
  isLink?: boolean;
  linkTo?: string;
};

const Button = (props: PropsWithChildren<Props>): React.ReactElement => {
  const {
    buttonClass: buttonType,
    children,
    disabled = false,
    onClick,
    isLink,
    linkTo,
  } = props;

  const classNames = [
    buttons.button_primary,
    buttons.button_secondary,
    buttons.button_tertiary,
  ];
  const className = [
    buttons.button,
    ...classNames.filter((c) => c.includes(buttonType)),
  ];

  return isLink ? (
    <Link to={`/${linkTo}`} className={className.join(' ')}>
      {children}
    </Link>
  ) : (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className.join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
