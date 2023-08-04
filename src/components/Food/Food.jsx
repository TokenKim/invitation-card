import React from 'react';
import styles from './Food.module.css';

export default function Food() {
  return (
    <article className={styles.container}>
      <div className={styles['item-container']}>
        <p className={styles.title}>식사</p>
        <p className={styles.contents}>
          •샐러드 채소 및 견과류 & 드레싱 2종
          <br />
          (시트러스 유자, 요거트 드레싱)
          <br />
          •옐로우 커리 감자 샐러드
          <br />
          •과일 샐러드 •사우어도우 빵 & 스프레드
          <br />
          •잡채 •육회 •보쌈 & 김치 •닭강정
          <br />
          •밥 •그릴 채소 & 소세지 & 목살
        </p>
      </div>
      <div className={styles['item-container']}>
        <p className={styles.title}>디저트</p>
        <p className={styles.contents}>
          •베리타르트 •레몬타르트 •브라우니 •인절미 •수박화채
        </p>
      </div>
      <div className={styles['item-container']}>
        <p className={styles.title}>음료</p>
        <p className={styles.contents}>•물 •탄산음료 •주스</p>
      </div>
      <p className={styles.info}>* 위 메뉴는 상황에 따라 변동될 수 있습니다.</p>
    </article>
  );
}
