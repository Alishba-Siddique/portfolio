import styles from './style.module.scss';
import Magnetic from '../../../../common/Magnetic/Magnetic';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Magnetic>
        <a href="#">Alishba</a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://www.linkedin.com/in/alishba-siddique"
          className="no-underline text-white"
          target="_blank"
        >
          LinkedIn
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://github.com/Alishba-Siddique"
          className="no-underline text-white"
          target="_blank"
        >
          GitHub
        </a>
      </Magnetic>
      {/* <Magnetic>
        <a href=''>Twitter</a>
      </Magnetic> */}
    </div>
  );
}
