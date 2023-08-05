import React from 'react';
import styles from './Hearts.module.css';
import ComboBox from '../../components/ComboBox/ComboBox';

export default function Hearts() {
  return (
    <section className={styles.container}>
      <img className={styles.icon} src="./images/HeartIcon.png" alt="icon" />
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
          menus={[
            {
              title: '신랑',
              name: '신재성',
              bank: [
                'JAESUNG SHIN',
                'IBAN : DE88100700240056324700',
                'BIC : DEUTDEDBBER',
                'Deutsche Bank',
              ],
            },
            { title: '혼주', name: '신남용', bank: '-' },
            { title: '혼주', name: '채영임', bank: '-' },
          ]}
          buttonStyle={{
            backgroundColor: '#eef5f8',
            border: '1px solid #d4e3ec',
          }}
          iconStyle={{
            color: '#71B5D6',
          }}
        />
        <ComboBox
          title={'신부측'}
          menus={[
            { title: '신부', name: '유지수', bank: '신한 110385729680' },
            { title: '혼주', name: '유형용', bank: '카카오 3333040702070' },
            { title: '혼주', name: '김수옥', bank: '농협 110502204748' },
          ]}
          buttonStyle={{
            backgroundColor: '#FFF2F2',
            border: '1px solid #FDDFDE',
          }}
          iconStyle={{
            color: '#FDA9C1',
          }}
        />
      </div>
    </section>
  );
}
