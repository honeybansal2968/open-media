import Image from "next/image";
import styles from "./page.module.css";
import VidoesGrid from "./components/video-grid/videos-grid";
export default function Home() {
  return (
    <main className={styles.main}>
      <VidoesGrid />
    </main>
  );
}
