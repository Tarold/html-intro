import styles from './style.module.sass';

function InputFood() {
  return (
    <span className={styles.singIn}>
      I`m already a member!
      <a href="https://youtu.be/dQw4w9WgXcQ" className={styles.singInLink}>
        Sing In
      </a>
    </span>
  );
}

export default InputFood;
