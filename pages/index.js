import Image from "next/image";

// components
import Seo from "../components/Seo";

// styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <Seo title="Sarah Radtke | Privat Praxis für Physiotherapie | Hamburg" />
      <div className={styles.portrait}>
        <Image
          src="/img/sarah-radtke-portrait.jpeg"
          alt="Sarah Radtke Portrait"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.informationContainer}>
        <Image
          src="/img/information.png"
          alt="Sarah Radtke Informationen"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </main>
  );
}
