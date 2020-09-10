import React from 'react';
import style from './UserItem.module.scss';
const UserItem = ({ userDataObj }) => {
  const {
    name,
    location,
    phone,
    picture: { medium: imgSrc },
  } = userDataObj;
  return (
    <li className={style.userItemContainer}>
      <img className={style.userAvatar} src={imgSrc} />
      <div>{`${name.first} ${name.last}`}</div>
      <div>{`Telephone number: ${phone}`}</div>
      <div>{`${location.country}, ${location.city}`}</div>
    </li>
  );
};

export default UserItem;
