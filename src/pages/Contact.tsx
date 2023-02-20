/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Checkbox from '../components/Checkbox/Checkbox';
import CompanyLogos from '../components/CompanyLogos/CompanyLogos';
import ReadyToStart from '../components/ReadyToStart/ReadyToStart';
import style from './contact.module.scss';
import InputWithMessage from '../components/InputWithMessage/InputWithMessage';

const Contact = () => {
  const [wasFormSubmitted, setFormSubmitted] = useState<boolean>(false);
  const notEmpty = "This field can't be empty";
  const validEmail = 'Please use a valid email address';
  return (
    <main className={style.main}>
      <div className="page__anchor">
        <h2 className={[style.contact__h2, 'h2'].join(' ')}>
          Submit a help request and we&apos;ll get in touch shortly.
        </h2>
        <div className={style.contact_container}>
          <form className={style.form} action="/">
            <InputWithMessage
              errorMessage={notEmpty}
              placeholder="Name"
              isRequired
              type="text"
              wasFormSubmitted={wasFormSubmitted}
            />
            <InputWithMessage
              errorMessage={validEmail}
              placeholder="Email"
              isRequired
              type="email"
              wasFormSubmitted={wasFormSubmitted}
            />
            <InputWithMessage
              errorMessage={notEmpty}
              placeholder="Address"
              isRequired
              type="text"
              wasFormSubmitted={wasFormSubmitted}
            />
            <InputWithMessage
              errorMessage={notEmpty}
              placeholder="Company Name"
              isRequired
              type="text"
              wasFormSubmitted={wasFormSubmitted}
            />
            <InputWithMessage
              errorMessage={notEmpty}
              placeholder="Title"
              isRequired
              type="text"
              wasFormSubmitted={wasFormSubmitted}
            />
            <InputWithMessage
              errorMessage={notEmpty}
              placeholder="Message"
              isRequired
              type="textarea"
              wasFormSubmitted={wasFormSubmitted}
            />

            <Checkbox>
              Stay up-to-date with company announcements and updates to our API
            </Checkbox>
            <Button
              buttonClass="tertiary"
              onClick={() => {
                setFormSubmitted(true);
              }}
            >
              Submit
            </Button>
          </form>
          <div className={style.contact__building_with_us}>
            <h4 className={style.contact__building_with_us__h4}>
              Join the thousands of innovators already building with us
            </h4>
            <CompanyLogos fill="dark" />
          </div>
        </div>
      </div>
      <ReadyToStart />
    </main>
  );
};

export default Contact;
