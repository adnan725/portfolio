import styles from "./Content.module.scss";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className={styles.container}>
      <div>Content</div>
    </div>
  );
};

export default Content;
