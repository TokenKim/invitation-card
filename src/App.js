import styles from './App.module.css';
import Gallery from './section/Gallery/Gallery';
import Introduce from './section/Introduce/Introduce';
import Invitation from './section/Invitation/Invitation';
import Main from './section/Main/Main';
import WeddingDay from './section/WeddingDay/WeddingDay';
import Information from './section/Information/Information';
import Footer from './section/Footer/Footer';

function App() {
  return (
    <div className={styles.container}>
      <Main />
      <Invitation />
      <WeddingDay />
      <Introduce />
      <Gallery />
      <Information />
      <Footer />
    </div>
  );
}

export default App;
