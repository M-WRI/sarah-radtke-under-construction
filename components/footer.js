// styles
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.addressInfoContainer}>
          <h2 className={styles.headline}>Sarah Radtke</h2>
          <Link href="https://goo.gl/maps/gUDEhoWBeN6K8Zep6" passHref>
            <a target="_blank">
              <span>
                Privatpraxis für Physiotherapie, <br /> Manuelle Therapie und
                Akupunktur
              </span>
              <address className={styles.adress}>
                Waitzstraße 7 22607 Hamburg
              </address>
            </a>
          </Link>
        </div>
        <div className={styles.scheduleContainer}>
          Termine nach Vereinbarung <br />
          Hausbesuche gerne nach Absprache
        </div>
        <div className={styles.contactContainer}>
          <a href="tel:+494088358553">
            <span>040.88 35 85 53</span>
          </a>
          <a href="mailto:praxis@sarahradtke.de">
            <span>praxis@sarahradtke.de</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
