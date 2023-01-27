import React, { PropsWithChildren } from 'react';
import buttons from './buttons.module.scss';

type Props = {
  buttonClass: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean | undefined;
};

const Button = (props: PropsWithChildren<Props>): React.ReactElement => {
  const { buttonClass: buttonType, children, disabled = false } = props;

  const classNames = [
    buttons.button_primary,
    buttons.button_secondary,
    buttons.button_tertiary,
  ];
  const className = [
    buttons.button,
    ...classNames.filter((c) => c.includes(buttonType)),
  ];

  return (
    <button
      type="button"
      onClick={() => {
        // do nothing
      }}
      disabled={disabled}
      className={className.join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
