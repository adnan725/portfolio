import styles from "./Navbar.module.scss";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.socialMedia}>
        <div>Gmail</div>
        <div>GitHub</div>
        <div>LinkedIn</div>
      </div>
    </div>
  );
};

export default Navbar;
