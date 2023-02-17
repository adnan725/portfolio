import styles from "./Content.module.scss";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.descriptionWrapper}>Left</div>
      <div className={styles.linksWrapper}>
        <p className={styles.projectsHeading}>Projects</p>
        <div className={styles.links}>
          <p
            className={`${styles.link} ${styles.borderGredient} 
            ${styles.borderColor}`}
          >
            About
          </p>
          <p
            className={`${styles.link} ${styles.borderGredient} 
            ${styles.borderColor}`}
          >
            Skills
          </p>
          <p
            className={`${styles.link} ${styles.borderGredient} 
            ${styles.borderColor}`}
          >
            Experience
          </p>
          <p
            className={`${styles.link} ${styles.borderGredient} 
            ${styles.borderColor}`}
          >
            Projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
