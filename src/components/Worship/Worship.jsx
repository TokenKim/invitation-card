import React from 'react';
import styles from './Worship.module.css';

export default function Worship() {
  return (
    <article className={styles.container}>
      <div className={styles['item-container']}>
        <p className={styles.title}>결혼예배</p>
        <p className={styles.contents}>
          일반적인 결혼식이 아닌 결혼예배로 진행되오니 <br />
          오시는 분들께서도 경건한 마음으로 참석 바라며,
          <br />
          오전 11시 50분까지 자리에 착석 부탁드립니다.
        </p>
      </div>
      <div className={styles['item-container']}>
        <p className={styles.title}>순서</p>
        <p className={styles.contents}>
          예배 후 식사가 진행될 예정입니다.
          <br />
          아침 식사는 드시고 오기를 권장드립니다.
        </p>
      </div>
      <div className={styles['item-container']}>
        <p className={styles.title}>답례품</p>
        <p className={styles.contents}>
          오시는 분들을 위해 작은 꽃다발을 준비했으니
          <br />
          저희의 마음을 받아주세요 :)
        </p>
      </div>
    </article>
  );
}
