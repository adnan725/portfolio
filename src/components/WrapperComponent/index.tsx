import styles from "./WrapperComponent.module.scss";
import Navbar from "../Navbar";

type Props = {};

const WrapperComponent = (props: Props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.upperEdge}></div>
        <div className={styles.lowerEdge}></div>
      </div>
    </div>
  );
};

export default WrapperComponent;
