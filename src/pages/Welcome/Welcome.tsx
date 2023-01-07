import { GiSittingDog } from "react-icons/gi";
import { GiTurtleShell } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import styles from "./welcome.module.css";

export const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={`reveal-text ${styles.logo}`}>
        <GiTurtleShell className={styles.icon} />
        <h1>Turtler</h1>
      </div>
      <div className={` ${styles.headline}`}>
        <h1>
          Twitter-liked social media,{" "}
          <span className="underline">but not that good.</span>
        </h1>
      </div>

      <div className={styles.btnContainer}>
        <NavLink to="/signup">
          <button className="btn">Signup</button>
        </NavLink>
        <NavLink to="/login">
          <button className="btn btn-outline">Login</button>
        </NavLink>
      </div>
    </div>
  );
};
