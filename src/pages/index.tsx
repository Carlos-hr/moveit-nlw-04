import Head from "next/head";
import {
  ChallengeBox,
  CompletedChallenges,
  Countdown,
  ExperienceBar,
  Profile,
} from "../components";
import { CountdownProvider } from "../contexts/CountdownContext";
import styles from "../styles/pages/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MoveIt</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
};

export default Home;
