import React from 'react';
import stylePhoneMockUp from './img-phone-mockup.module.scss';
import styleImgEasyToImplement from './img-easy-to-implement.module.scss';
import styleImgSimpleUI from './img-simple-ui.module.scss';

type Props = {
  variant: 'PhoneMockUp' | 'EasyToImplement' | 'SimpleUI';
};

const ImgWithShadow = (props: Props) => {
  const { variant } = props;
  let className;
  switch (variant) {
    case 'PhoneMockUp':
      className = stylePhoneMockUp['img-phone-mockup'];
      break;
    case 'EasyToImplement':
      className = styleImgEasyToImplement['img-easy-to-implement'];
      break;
    case 'SimpleUI':
      className = styleImgSimpleUI['img-simple-ui'];
      break;
    default:
      className = '';
      break;
  }
  return <div className={className} />;
};
export default ImgWithShadow;
