import React from 'react';
import styles from './Hearts.module.css';
import ComboBox from '../../components/ComboBox/ComboBox';

export default function Hearts() {
  return (
    <section className={styles.container}>
      <img src="./images/HeartIcon.png" alt="icon" />
      <p className={styles.title}>마음 전하실 곳</p>
      <p className={styles.contents}>
        저희 두 사람의 소중한 시작을
        <br />
        축하해주시는 모든 분들께 감사드립니다.
        <br />
        따뜻한 진심을 오래도록 간직하고
        <br />
        행복하게 잘 살겠습니다.
      </p>
      <div>
        <ComboBox
          title={'신랑측'}
          menus={{ title: '신랑', name: '신재성', bank: '신한 110385729680' }}
        />
      </div>
    </section>
  );
}
