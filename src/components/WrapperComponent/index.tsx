import styles from "./WrapperComponent.module.scss";

type Props = {};

const WrapperComponent = (props: Props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.upperEdge}>
          <div className={styles.box1}></div>
          <div className={styles.box2}></div>
        </div>
        <div className={styles.lowerEdge}>
          <div className={styles.box3}></div>
          <div className={styles.box4}></div>
        </div>
      </div>
    </div>
  );
};

export default WrapperComponent;
