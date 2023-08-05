import React, { useState } from 'react';
import styles from './ComboBox.module.css';
import { BsChevronDown } from 'react-icons/bs';
import { SlEnvolopeLetter } from 'react-icons/sl';

export default function ComboBox({ title, menus, buttonStyle, iconStyle }) {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles['item-container']} style={buttonStyle}>
        <div className={styles.title} onClick={handleClick}>
          <div className={styles['title-left-side']}>
            <SlEnvolopeLetter
              className={styles['title-icon']}
              style={iconStyle}
            />
            <p>{title}</p>
          </div>

          <BsChevronDown
            className={`${styles['title-icon']} ${isOpened ?  styles.up : styles.down}`} //prettier-ignore
            style={iconStyle}
          />
        </div>
      </div>

      {menus.map((menu) => {
        return (
          <div
            className={
              `${styles['menu-container']} ${Array.isArray(menu.bank) && styles.multiline} ${isOpened && styles.show}`
            } //prettier-ignore
            style={buttonStyle}
          >
            <div
              className={`${styles['menu-left-side']} ${Array.isArray(menu.bank) && styles.multiline}`} //prettier-ignore
            >
              <p className={styles['menu-title']}>{menu.title}</p>
              <p className={styles['menu-name']}>{menu.name}</p>
            </div>

            {Array.isArray(menu.bank) ? (
              <div>
                {menu.bank.map((text) => (
                  <p className={styles['menu-bank']}>{text}</p>
                ))}
              </div>
            ) : (
              <p className={styles['menu-bank']}>{menu.bank}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
