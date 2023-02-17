import styles from "./Content.module.scss";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.descriptionWrapper}>Left</div>
      <div className={styles.linksWrapper}>
        <p className={styles.projectsHeading}>Projects</p>
        <div className={styles.links}>
          <p>Link 1</p>
          <p>Link 1</p>
          <p>Link 1</p>
          <p>Link 1</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
