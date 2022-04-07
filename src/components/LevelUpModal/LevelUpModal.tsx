import { useContext } from "react";
import { ChallengeContext } from "../../contexts/ChallengeContext";
import styles from "../../styles/components/LevelUpModal.module.css";

const LevelUpModal = () => {
  const { level, closeModal } = useContext(ChallengeContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.leveUpModalContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt="fechar modal" />
        </button>
      </div>
    </div>
  );
};

export default LevelUpModal;
