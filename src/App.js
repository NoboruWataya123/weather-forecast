import Left from "./components/Left";
import Right from "./components/Right";
import React from "react";
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.container}>
      <Left />
      <Right />
    </div>
  );
}

export default App;
