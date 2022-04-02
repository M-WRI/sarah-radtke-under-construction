import Image from "next/image";
import Card from "../components/Card";
import InformationModal from "../components/InformationModal";

// components
import Seo from "../components/Seo";

// styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <Seo title="Sarah Radtke | Privat Praxis für Physiotherapie | Hamburg" />
      <Card />
      <InformationModal />
    </main>
  );
}
