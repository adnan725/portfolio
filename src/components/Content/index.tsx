import styles from "./Content.module.scss";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.descriptionWrapper}>
        <div>
          <p className={styles.heading}>Heading</p>
          <div className={styles.content}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias necessitatibus architecto laudantium numquam magni
              incidunt vel nulla laboriosam maiores? Molestiae qui recusandae
              debitis aut ipsa! Quisquam nam nobis corrupti iste. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Molestias
              necessitatibus architecto laudantium numquam magni incidunt vel
              nulla laboriosam maiores? Molestiae qui recusandae debitis aut
              ipsa! Quisquam nam nobis corrupti iste?
            </p>
          </div>
        </div>
      </div>
      <div className={styles.linksWrapper}>
        <p className={styles.projectsHeading}>Credentials</p>
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
