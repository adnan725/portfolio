import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./WrapperComponent.module.scss";

type Props = {};

const WrapperComponent = (props: Props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Navbar />
        <Footer />
        <div className={styles.upperEdge}></div>
        <div className={styles.lowerEdge}></div>
      </div>
    </div>
  );
};

export default WrapperComponent;
