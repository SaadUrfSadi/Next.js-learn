"use client"
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>state , useState </h1>
        <button onClick={()=> alert("hello world")}>click</button>
      </main>
     
    </div>
  );
}
