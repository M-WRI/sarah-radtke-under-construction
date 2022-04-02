import Card from "../components/Card";
import InformationModal from "../components/InformationModal";

// components
import Seo from "../components/Seo";

export default function Home() {
  return (
    <main>
      <Seo title="Sarah Radtke | Privatpraxis für Physiotherapie | Hamburg" />
      <Card />
      <InformationModal />
    </main>
  );
}
