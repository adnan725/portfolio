import styles from "./Navbar.module.scss";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.socialMedia}>
        <div className={styles.iconBox}>
          <a className={styles.link} href="mailto:adnanali6688@gmail.com">
            {<FaEnvelope className={styles.icon} />}
          </a>
        </div>
        <div className={styles.iconBox}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/adnan-ali-5b9736111/"
          >
            {<FaLinkedin className={styles.icon} />}
          </a>
        </div>
        <div className={styles.iconBox}>
          <a className={styles.link} href="https://github.com/adnan725">
            {<FaGithub className={styles.icon} />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
