import styles from "./Content.module.scss";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.descriptionWrapper}>Left</div>
      <div className={styles.linksWrapper}>
        <h3>Projects</h3>
      </div>
    </div>
  );
};

export default Content;
