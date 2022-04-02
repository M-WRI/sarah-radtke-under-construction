import Image from "next/image";

import styles from "../styles/Home.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default Card;
