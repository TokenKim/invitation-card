import React from 'react';
import styles from './Ort.module.css';
import { BiCopy } from 'react-icons/bi';

export default function Ort() {
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  return (
    <article className={styles.container}>
      <img src="./images/ort.jpg" alt="ort" />
      <div className={styles['item-container']}>
        <p className={styles.title}>주소</p>
        <div className={styles['address-container']}>
          <span className={styles['address-contents']}>
            Golgathakirche, Borsigstr.6, 10115 Berlin
          </span>
          <BiCopy
            className={styles['copy-icon']}
            onClick={() =>
              copyTextToClipboard('Golgathakirche, Borsigstr.6, 10115 Berlin')
            }
          />
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
