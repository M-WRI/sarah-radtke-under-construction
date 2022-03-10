import Image from "next/image";

// components
import Seo from "../components/Seo";

// styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Seo title="Sarah Radtke | Privat Praxis für Physiotherapie | Hamburg" />
      <div className={styles.informationContainer}>
        <Image
          src="/img/information.png"
          alt="Sarah Radtke Informationen"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
