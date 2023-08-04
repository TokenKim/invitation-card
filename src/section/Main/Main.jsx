import React from 'react';
import styles from './Main.module.css';

export default function Main() {
  return (
    <section className={styles.container}>
      <p className={styles.title}>We're Getting Married</p>
      <div>
        <div className={styles.names}>
          <div className={styles.name}>
            <p className={styles['name-kr']}>신재성</p>
            <p className={styles['name-en']}>Jaesung Shin</p>
          </div>
          <p className={styles['name-and']}>&</p>
          <div className={styles.name}>
            <p className={styles['name-kr']}>유지수</p>
            <p className={styles['name-en']}>Jisu Yu</p>
          </div>
        </div>
        <div className={styles.information}>
          <p className={styles.date}>19.08.2023 SAT 12:00 PM</p>
          <p className={styles.ort}>BERLIN, GERMANY</p>
        </div>
      </div>
    </section>
  );
}
