import Image from "next/image";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.sRLogo}>
          <Image
            src="/img/sarah-radtke-logo.svg"
            alt="SR"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.nameLogo}>
          <Image
            src="/img/sarah-radtke.svg"
            alt="SR"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
