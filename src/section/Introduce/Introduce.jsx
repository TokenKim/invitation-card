import React from 'react';
import styles from './Introduce.module.css';

export default function Introduce() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <p className={styles['title-en']}>INTRODUCE</p>
        <p className={styles['title-kr']}>소개합니다</p>
      </div>
      <article className={styles.item}>
        <img src="./images/ManPic.png" alt="Main Pic" />
        <div>
          <div className={styles.role}>
            <span className={styles['role-male']}>신랑</span>
            <span className={styles.name}>신재성</span>
          </div>
          <p className={styles.introduce}>
            호기심 많은 장난꾸러기 소년은 <br />
            듬직하고 점잖은 남자가 되었습니다.
            <br />
            쾌활하고 재밌는 그녀를 만나 행복합니다.
            <br />
            나를 웃게 해주는 사랑스러운 이 여자를
            <br />
            제가 더 사랑하겠습니다.
          </p>
          <p className={styles.summary}>#ISFP #건축가 #노래잘함</p>
        </div>
      </article>
      <article className={styles.item}>
        <img
          className={styles.avatar}
          src="./images/WomanPic.png"
          alt="Main Pic"
        />
        <div>
          <div className={styles.role}>
            <span className={styles['role-female']}>신부</span>
            <span className={styles.name}>유지수</span>
          </div>
          <p className={styles.introduce}>
            수줍음 많은 애교쟁이 소녀는
            <br />
            유쾌하고 배려심 깊은 여자가 되었습니다.
            <br />
            순수한 마음을 가진 그를 만나 기쁩니다.
            <br />
            나를 있는 그대로 사랑해주는 고마운 이 남자에게
            <br />
            제가 더 헌신하겠습니다.
          </p>
          <p className={styles.summary}>#ESFJ #디자이너 #손맛좋음</p>
        </div>
      </article>
    </section>
  );
}
