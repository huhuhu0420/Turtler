import styles from "./app-loader.module.css";
import { GiTurtleShell } from "react-icons/gi";

export const AppLoader = () => {
  return (
    <div className={styles.center}>
      <GiTurtleShell
        className={`${styles.circle} ${styles.pulse} ${styles.blue}`}
      />
    </div>
  );
};

