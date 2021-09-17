import React, { useEffect, useState } from "react";
import styles from "./Left.module.css";
import { fetchData } from "../utils/fetch";
import { getDayOfWeek } from "./Right";

export default function Left() {
  const [temperature, setTemperature] = useState(0);
  const [description, setDescription] = useState("");
  const [symbol, setSymbol] = useState("");

  useEffect(() => {
    fetchData(`current/102013159&lang=ru`).then((data) => {
      setTemperature(data.current.temperature);
      setDescription(data.current.symbolPhrase);
      setSymbol(data.current.symbol);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <button className={styles.search}>Searh for place</button>
      </div>
      <div className={styles.image}>
        <img
          src={`https://developer.foreca.com/static/images/symbols/${symbol}.png`}
          alt="symbol"
          className={styles.symbol}
        />
      </div>
      <div className={styles.temperature}>
        <p>{temperature}℃</p>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
        <p className={styles.date}>{getDayOfWeek(Date.now())}</p>
      </div>
    </div>
  );
}
