/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { ChallengeContext } from "../../contexts/ChallengeContext";
import styles from "../../styles/components/Profile.module.css";

const Profile = () => {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Carlos-hr.png" alt="name" />
      <div>
        <strong>Carlos Henrique</strong>
        <p>
          <img src="icons/level.svg" alt="icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
