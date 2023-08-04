import React, { useState } from 'react';
import styles from './Information.module.css';
import Ort from '../../components/Ort/Ort';
import Food from '../../components/Food/Food';
import Worship from '../../components/Worship/Worship';

export default function Information() {
  const [selectedMenu, SetSelectedMenu] = useState('ort');

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <p className={styles['title-en']}>INFORMATION</p>
        <p className={styles['title-kr']}>안내드립니다</p>
      </div>
      <nav className={styles.navbar}>
        <button
          className={`${styles['navbar-button']} ${selectedMenu === 'ort' && styles.selected}`} //prettier-ignore
          onClick={() => SetSelectedMenu('ort')}
        >
          오시는 길
        </button>
        <button
          className={`${styles['navbar-button']} ${selectedMenu === 'food' && styles.selected}`} //prettier-ignore
          onClick={() => SetSelectedMenu('food')}
        >
          준비한 식사
        </button>
        <button
          className={`${styles['navbar-button']} ${selectedMenu === 'worship' && styles.selected}`} //prettier-ignore
          onClick={() => SetSelectedMenu('worship')}
        >
          예배 안내
        </button>
      </nav>
      {selectedMenu === 'ort' && <Ort />}
      {selectedMenu === 'food' && <Food />}
      {selectedMenu === 'worship' && <Worship />}
    </section>
  );
}
