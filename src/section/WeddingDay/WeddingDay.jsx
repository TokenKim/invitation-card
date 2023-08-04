import React from 'react';
import styles from './WeddingDay.module.css';
import { BsCalendar } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function WeddingDay() {
  return (
    <section className={styles.container}>
      <div className={styles['title-container']}>
        <p className={styles.title}>WEDDING DAY</p>
        <p className={styles.date}>2023년 8월 19일</p>
      </div>
      <div className={styles['calendar-container']}>
        <img src="./images/Calendar.svg" alt="calendar" />
      </div>
      <div className={styles['information-container']}>
        <div className={styles.information}>
          <BsCalendar />
          <p>2023.08.19 토요일 오후 12:00</p>
        </div>
        <div className={styles.information}>
          <FaMapMarkerAlt />
          <p>Golgathakirche (독일 베를린)</p>
        </div>
      </div>
      <div className={styles.introduction}>
        <p className={styles['introduction-title']}>SAVE THE DATE</p>
        <p className={styles['introduction-contents']}>
          축하의 마음으로 결혼예배에 참석하시는 <br />
          모든 분들을 더욱 귀하게 모실 수 있도록,
          <br />
          아래 버튼을 눌러 신랑과 신부에게
          <br />
          참석 여부 전달을 부탁드립니다.
        </p>
      </div>
      <button className={styles.button}>참석여부 전달하기</button>
    </section>
  );
}
