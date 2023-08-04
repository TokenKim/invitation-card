import React, { useState } from 'react';
import styles from './Picture.module.css';

export default function Picture({ url }) {
  const [fullMode, setFullMode] = useState(false);
  const handleClick = () => {
    setFullMode((prev) => !prev);
  };
  return (
    <>
      <div className={styles['img-container']}>
        <img
          className={styles.img}
          onClick={handleClick}
          src={`./images/gallery-small/${url}`}
          alt={url}
        />
      </div>

      <div
        className={`${styles['full-mode']} ${fullMode ?  styles.show : styles.none}`} //prettier-ignore
        onClick={handleClick}
      >
        <img
          className={styles['full-img']}
          src={`./images/gallery/${url}`}
          alt={url}
        />
      </div>
    </>
  );
}
