import styles from "./About.module.scss";

type Props = {};

const About = (props: Props) => {
  return (
    <div className={styles.paragraph}>
      <p>
        My name is Adnan Ali I'm a front-end developer based in Stuttgart,
        Germany. I have developed many types of front-ends from well know
        Real-Estate applications to Ecommerce booking platforms.
      </p>
      <p>
        I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces
        and intuitively implemented UX.
      </p>
    </div>
  );
};

export default About;
