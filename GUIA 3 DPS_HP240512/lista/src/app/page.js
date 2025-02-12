import styles from "./page.module.css";
import From from "@/components/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <div>
          <p>
            Aquí haremos nuestro TO-DO list
          </p>
          <From></From>
        </div>
      </div>
    </main>
  );
} 