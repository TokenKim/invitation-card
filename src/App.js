import styles from './App.module.css';
import Introduce from './components/Introduce/Introduce';
import Invitation from './components/Invitation/Invitation';
import Main from './components/Main/Main';
import WeddingDay from './components/WeddingDay/WeddingDay';

function App() {
  return (
    <div className={styles.container}>
      <Main />
      <Invitation />
      <WeddingDay />
      <Introduce />
    </div>
  );
}

export default App;
