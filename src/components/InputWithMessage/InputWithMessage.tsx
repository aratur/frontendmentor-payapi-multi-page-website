import React from 'react';
import style from './input__with_message.module.scss';

type Props = {
  errorMessage: string;
  placeholder: string;
  isRequired: boolean;
  type: 'text' | 'email' | 'textarea';
  wasFormSubmitted: boolean;
};

const InputWithMessage = (props: Props) => {
  const { errorMessage, placeholder, isRequired, type, wasFormSubmitted } =
    props;

  return (
    <div className={style.container}>
      {['text', 'email'].includes(type) ? (
        <input
          type={wasFormSubmitted ? type : 'text'}
          className={style.form__input}
          name={placeholder}
          placeholder={placeholder}
          aria-label={placeholder}
          required={wasFormSubmitted && isRequired}
        />
      ) : (
        <textarea
          className={style.form__textarea}
          name={placeholder}
          placeholder={placeholder}
          aria-label={placeholder}
        />
      )}
      <div className={style.message_container}>{errorMessage}</div>
    </div>
  );
};

export default InputWithMessage;
