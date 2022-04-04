import React from "react";
import styles from "../../styles/components/ExperienceBar.module.css";

const ExperienceBar = () => {
  return (
    <header className={styles.experienceBar}>
      <span>0xp</span>
      <div>
        <div style={{ width: "60%" }} />
        <span className={styles.currentExperience} style={{ left: "60%" }}>
          360px
        </span>
      </div>
      <span>600xp</span>
    </header>
  );
};

export default ExperienceBar;
