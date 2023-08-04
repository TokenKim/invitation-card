import styles from './App.module.css';
import Invitation from './components/Invitation/Invitation';
import Main from './components/Main/Main';

function App() {
  return (
    <div className={styles.container}>
      <Main />
      <Invitation />
    </div>
  );
}

export default App;
