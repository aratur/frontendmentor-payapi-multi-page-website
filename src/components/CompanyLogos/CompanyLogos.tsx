import React from 'react';
import style from './company_logos.module.scss';
import tesla from '../../assets/shared/desktop/tesla.svg';
import microsoft from '../../assets/shared/desktop/microsoft.svg';
import hp from '../../assets/shared/desktop/hewlett-packard.svg';
import oracle from '../../assets/shared/desktop/oracle.svg';
import google from '../../assets/shared/desktop/google.svg';
import nvidia from '../../assets/shared/desktop/nvidia.svg';

type Props = {
  variant: 'light' | 'dark';
};

const CompanyLogos = (props: Props) => {
  const { variant } = props;
  return (
    <div className={style['company-logos__container']} data-variant={variant}>
      <img src={tesla} alt="Tesla's logo" />
      <img src={microsoft} alt="Microsoft's logo" />
      <img src={hp} alt="HP's logo" />
      <img src={oracle} alt="Oracle's logo" />
      <img src={google} alt="Google's logo" />
      <img src={nvidia} alt="Nvidia's logo" />
    </div>
  );
};

export default CompanyLogos;
