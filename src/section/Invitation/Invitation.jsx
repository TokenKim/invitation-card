import React from 'react';
import styles from './Invitation.module.css';

export default function Invitation() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <p className={styles['title-en']}>INVITATION</p>
        <p className={styles['title-kr']}>초대합니다</p>
      </div>
      <p className={styles.introduction}>
        조용하고 예리한 남자와 <br />
        활발하고 섬세한 여자가 만나
        <br />
        서로의 부족함을 채우며
        <br />
        하나가 되려 합니다.
        <br />
        <br />
        영화 같은 결혼식을 꿈꿔왔던 저희는
        <br />
        햇살 가득한 8월 독일의 한 교회에서
        <br />
        결혼예배를 드리게 되었습니다.
        <br />
        <br />
        하나님 앞에서 혼인을 서약하는 날<br />
        소중한 시간 내주시어
        <br />
        함께 기뻐해주시면 진심으로 감사하겠습니다.
        <br />
        <br />
        저희를 응원해주시고 아껴주시는
        <br />
        고마운 분들을 모두 모시지 못하기에
        <br />
        아쉬운 마음이 크지만,
        <br />
        마음을 다해 축복해주신다면
        <br />
        아름답고 행복한 가정의 모습으로
        <br />
        보답하겠습니다.
        <br />
      </p>
      <div className={styles['name-container']}>
        <span className={styles.name}>신남용 • 채영임</span>
        <span className={styles['name-concat']}>의 아들</span>
        <span className={styles.name}>재성</span>
      </div>
      <div>
        <span className={styles.name}>유형용 • 김수옥</span>
        <span className={styles['name-concat']}>의 딸</span>
        <span className={styles.name}>지수</span>
      </div>
    </section>
  );
}
