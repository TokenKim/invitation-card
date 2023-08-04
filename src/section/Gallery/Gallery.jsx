import React from 'react';
import styles from './Gallery.module.css';
import Picture from '../../components/Picture/Picture';

export default function Gallery() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <p className={styles['title-en']}>GALLERY</p>
        <p className={styles['title-kr']}>우리의 사진첩</p>
      </div>
      <ul className={styles['img-container']}>
        {urlList.map((url, index) => (
          <li key={index}>
            <Picture url={url} />
          </li>
        ))}
      </ul>
    </section>
  );
}

const urlList = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
  '17.jpg',
  '18.jpg',
];
