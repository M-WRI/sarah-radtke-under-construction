import Image from "next/image";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/img/sarah-radtke-logo.svg"
            alt="Sarah Radtke Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h2 className={styles.logoFont}>Sarah Radtke</h2>
      </div>
    </nav>
  );
};

export default Navbar;
