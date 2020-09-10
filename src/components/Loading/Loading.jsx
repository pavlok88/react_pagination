import React from 'react';
import style from './Loading.module.scss'
const Loading = () => {
  return (
    <div className={style.facebookG}>
      <div className={`${style.blockG_1} ${style.facebook_blockG}`}></div>
      <div className={`${style.blockG_2} ${style.facebook_blockG}`}></div>
      <div className={`${style.blockG_3} ${style.facebook_blockG}`}></div>
    </div>
  );
};
export default Loading;
