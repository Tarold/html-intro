import SingUpForm from './components/SingUpForm';
import styles from './App.module.sass';

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.siteHeader}>Sing Up #01</h1>
      <SingUpForm />
    </div>
  );
}

export default App;
