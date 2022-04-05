import styles from "../../styles/components/ChallengeBox.module.css";

const ChallengeBox = () => {
  const ch = true;
  return (
    <div className={styles.challengeBoxContainer}>
      {ch ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400xp</header>

          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 min</p>
          </main>

          <footer>
            <button type="button" className={styles.challengFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengSucceededButton}>
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
