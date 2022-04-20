import Card from "../components/Card";
import InformationModal from "../components/InformationModal";
import Link from "next/link";

// components
import Seo from "../components/Seo";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <Seo title="Sarah Radtke | Privatpraxis für Physiotherapie | Hamburg" />
      <Card />
      <InformationModal />
      <Link href="/impressum">
        <a className={styles.link}>Impressum</a>
      </Link>
    </main>
  );
}
