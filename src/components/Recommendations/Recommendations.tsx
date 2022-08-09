import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { followHandler } from "../../features/authSlice";
import { OtherUsers } from "../../types/auth.types";
import { shuffleArray } from "../../utils/shuffleArray";
import styles from "./recommendations.module.css";

export const Recommendations = () => {
  const { allUsers, id, userDetails } = useAppSelector((store) => store.auth);
  const [shuffledUsers, setShuffledUsers] = useState<OtherUsers[]>([]);

  useEffect(() => {
    setShuffledUsers(() =>
      shuffleArray(allUsers.filter((user) => user.id !== id))
    );
  }, []);

  const dispatch = useAppDispatch();
  return (
    <aside className={styles.aside}>
      <p className={styles.containerTitle}>Who to follow</p>
      {shuffledUsers.slice(0, 4).map((user: OtherUsers) => {
        const { id, photo, displayName, userName } = user;
        return (
          <div className={styles.userContainer}>
            {photo ? (
              <img className="avatar avatar-standard" src={photo} alt="gojo" />
            ) : (
              <BsPersonCircle className="avatar-standard" />
            )}

            <div className={styles.details}>
              <p className={styles.displayName}>{displayName}</p>
              <p className={styles.userName}>@{userName}</p>
            </div>

            {userDetails?.following.some((user) => user === id) ? (
              <button
                onClick={() => dispatch(followHandler(id))}
                className="btn btn-outline"
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => dispatch(followHandler(id))}
                className="btn"
              >
                Follow
              </button>
            )}
          </div>
        );
      })}
      <NavLink className={styles.suggestMore} to="/people">
        Show More
      </NavLink>
    </aside>
  );
};
