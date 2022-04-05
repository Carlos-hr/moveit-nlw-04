import { ChallengeContext } from "../contexts/ChallengeContext";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChallengeContext.Provider value={"teste"}>
      <Component {...pageProps} />
    </ChallengeContext.Provider>
  );
};

export default MyApp;
