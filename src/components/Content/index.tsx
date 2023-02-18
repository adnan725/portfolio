import styles from "./Content.module.scss";
import React, { useState } from "react";
import About from "../About";
import Skills from "../Skills";

type Props = {};

const Content = (props: Props) => {
  const [activeLink, setActiveLink] = useState("about");

  const linkHandler = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className={styles.container}>
      <div className={styles.descriptionWrapper}>
        <div>
          <p className={styles.heading}>Heading</p>
          <div className={styles.content}>
            {activeLink === "about" && (
              <p className={styles.paragraph}>{<About />}</p>
            )}
            {activeLink === "skills" && (
              <p className={styles.paragraph}>{<Skills />}</p>
            )}
            {activeLink === "experience" && (
              <p className={styles.paragraph}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias necessitatibus architecto laudantium numquam magni
                incidunt vel nulla laboriosam maiores? Molestiae qui recusandae
                debitis aut ipsa! Quisquam nam nobis corrupti iste. us
                architecto laudantium numquam magni incidunt vel nulla
                laboriosam maiores? Molestiae qui recusandae debitis aut ipsa!
                Quisquam nam nobis corrupti iste.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.linksWrapper}>
        <p className={styles.projectsHeading}>Credentials</p>
        <div className={styles.links}>
          <p
            onClick={() => linkHandler("about")}
            className={`${styles.link} ${styles.borderGredient} 
            ${styles.borderColor}`}
          >
            About
          </p>
          <p
            onClick={() => linkHandler("skills")}
            className={`${styles.link} ${styles.borderGredient} 
            ${styles.borderColor}`}
          >
            Skills
          </p>
          <p
            onClick={() => linkHandler("experience")}
            className={`${styles.link} ${styles.borderGredient} 
            ${styles.borderColor}`}
          >
            Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
