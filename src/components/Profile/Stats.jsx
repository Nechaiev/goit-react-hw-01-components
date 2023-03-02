import React from 'react';

import s from './Profile.module.css';

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={s.stats}>
      <li className={s.followersList}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li className={s.viewsList}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li className={s.likesList}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  );
};
export default Stats;