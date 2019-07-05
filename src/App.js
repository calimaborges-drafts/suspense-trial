import React, { Suspense } from "react";
import Loading from "./Loading";
import styles from "./App.module.css";

const MainComponent = React.lazy(() => import("./MainComponent"));

function App() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<Loading ms={1000} />}>
        <MainComponent />
      </Suspense>
    </div>
  );
}

export default App;
