import React from 'react';
import styles from './Ort.module.css';
import { RiExternalLinkLine } from 'react-icons/ri';

export default function Ort() {
  return (
    <article className={styles.container}>
      <img src="./images/ort.jpg" alt="ort" />
      <div className={styles['item-container']}>
        <p className={styles.title}>주소</p>
        <div className={styles['address-container']}>
          <span className={styles['address-contents']}>
            Golgathakirche, Borsigstr.6, 10115 Berlin
          </span>

          <a
            className={styles.link}
            href={
              'https://www.google.com/maps/place/Golgathakirche+-+Ev.+Kirchengemeinde+am+Weinberg/@52.5289762,13.3879671,17z/data=!3m1!4b1!4m6!3m5!1s0x47a851eed032e1ff:0xc57523deb55031cd!8m2!3d52.5289762!4d13.390542!16s%2Fg%2F12214wbbc?entry=ttu'
            }
            target="blank"
          >
            <RiExternalLinkLine />
          </a>
        </div>
      </div>
      <div className={styles['item-container']}>
        <p className={styles.title}>대중교통 이용 시</p>
        <p className={styles['public-transport']}>
          S-Bahnhof : Nordbahnhof
          <br />
          S-Bahn : S1 / S2 / S25 / S26
          <br />
          Tram : 12 / M8 / M10
          <br />
          Bus : 247
        </p>
      </div>
      <div className={styles['item-container']}>
        <p className={styles.title}>자가용 이용 시</p>
        <p className={styles['private-transport']}>
          별도의 주차장은 마련되어 있지 않으며, <br />
          베를린 중심가에 위치해 있어 주차공간 찾는 데에 <br />
          어려움을 겪으실 수 있습니다. <br />
          가급적 대중교통을 이용하시기를 권해드립니다.
        </p>
      </div>
    </article>
  );
}
