import styles from "./Content.module.scss";
import React, { useState } from "react";
import About from "../About";
import Skills from "../Skills";
import Experience from "../Experience";

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
            {activeLink === "about" && <About />}
            {activeLink === "skills" && <Skills />}
            {activeLink === "experience" && <Experience />}
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
