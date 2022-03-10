// styles
import styles from "../styles/Footer.module.css";

const footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.addressContainer}>
          <h1 className={styles.name}>Sarah Radtke</h1>
          <span>
            Privatpraxis für Physiotherapie, Manuelle Therapie und Akupunktur
          </span>
          <address>Waitzstraße 7, 22607 Hamburg</address>
        </div>
        <div className={styles.scheduleContainer}>
          <span>Mo | Mi | Fr 8 – 20 Uhr</span>
          <span>Di | Do 8 – 20 Uhr</span>
          <span>Telefonisch täglich 8 – 20 Uhr</span>
        </div>
        <div className={styles.contactContainer}>
          <span>040 883 585 53</span>
          <span>praxis@sarahradtke.de</span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
