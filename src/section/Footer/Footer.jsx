import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <section className={styles.container}>
      <p className={styles.contents}>
        언제나 저희 곁을 따뜻하게 지켜주신 <br />
        모든 분들께 감사드립니다.
      </p>
      <img src="./images/HeartIcon.png" alt="icon" />
      <div>
        <span className={styles.name}>신재성</span>
        <span className={styles['name-concat']}>&</span>
        <span className={styles.name}>유지수</span>
      </div>
      <p className={styles.copyright}>
        Copyright 2023. TokenKim DEVELOP. All rights reserved.
      </p>
    </section>
  );
}
