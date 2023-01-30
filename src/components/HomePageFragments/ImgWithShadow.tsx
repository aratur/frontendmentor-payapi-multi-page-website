import React from 'react';
import stylePhoneMockUp from './ImgPhoneMockup.module.scss';
import styleImgEasyToImplement from './ImgEasyToImplement.module.scss';
import styleImgSimpleUI from './ImgSimpleUI.module.scss';

type Props = {
  img: 'PhoneMockUp' | 'EasyToImplement' | 'SimpleUI';
};

const ImgWithShadow = (props: Props) => {
  const { img } = props;
  let className;
  switch (img) {
    case 'PhoneMockUp':
      className = stylePhoneMockUp.img_phone_mockup;
      break;
    case 'EasyToImplement':
      className = styleImgEasyToImplement.img_easy_to_implement;
      break;
    case 'SimpleUI':
      className = styleImgSimpleUI.img_simple_ui;
      break;
    default:
      className = '';
      break;
  }
  return <div className={className} />;
};
export default ImgWithShadow;
