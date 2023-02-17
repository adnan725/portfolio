import styles from "./Footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>©2023 adykod.com</div>
    </div>
  );
};

export default Footer;
