import React, { useState } from 'react';
import styles from './ComboBox.module.css';
import { BsChevronDown } from 'react-icons/bs';
import { SlEnvolopeLetter } from 'react-icons/sl';

export default function ComboBox({ title, menus }) {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={handleClick}>
        <div className={styles['title-left-side']}>
          <SlEnvolopeLetter className={styles['title-icon']} />
          <p>{title}</p>
        </div>

        <BsChevronDown
          className={`${styles['title-icon']} ${isOpened ?  styles.up : styles.down}`} //prettier-ignore
        />
      </div>
      <ul className={styles.menus}>
        {menus.map((menu) => {
          <li>{}menu.title</li>;
        })}
      </ul>
    </div>
  );
}
