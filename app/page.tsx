import styles from "./page.module.css";
import MainPage from "./components/main/page";
import PomodoroPage from "./components/pomodoro/page";

export default function Home() {
  return (
      <main className={styles.main}>
        <PomodoroPage />
        <MainPage />
      </main>
  );
}
