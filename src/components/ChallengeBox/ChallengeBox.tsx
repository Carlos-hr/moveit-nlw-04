/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/components/ChallengeBox.module.css";
import { useContext } from "react";
import { ChallengeContext } from "../../contexts/ChallengeContext";
import { CountdownContext } from "../../contexts/CountdownContext";

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengeContext);

  const { resetCountdown } = useContext(CountdownContext);
  const handleChallengeCompleted = () => {
    completeChallenge();
    resetCountdown();
  };

  const handleChallengeFailed = () => {
    resetChallenge()
    resetCountdown();
  };

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="icone" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengSucceededButton}
              onClick={handleChallengeCompleted}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Avance de level completando os desafios.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
