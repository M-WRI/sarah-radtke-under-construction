import { useState } from "react";
import { IoInformationOutline, IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Footer from "./footer";

// styles
import style from "../styles/InformationModal.module.css";

const InformationModal = () => {
  const [open, setOpen] = useState(false);

  const modalHandeler = () => {
    setOpen(!open);
  };

  const animation = {
    open: {
      opacity: 1,
      visibility: "visible",
      transition: { bounce: 0, ease: "easeOut", duration: 0.5 },
    },
    close: {
      opacity: 0,
      visibility: "hidden",
      transition: { bounce: 0, ease: "easeOut", duration: 0.5 },
    },
  };

  return (
    <>
      <motion.div
        className={style.modalContainer}
        initial={{ opacity: 0 }}
        variants={animation}
        animate={open ? "open" : "close"}
      >
        {open && <Footer />}
      </motion.div>

      <div
        className={style.modalBtn}
        onClick={modalHandeler}
        style={{ color: open ? "#fff" : "#cbbb9f" }}
      >
        {open ? <IoCloseSharp /> : <IoInformationOutline />}
      </div>
    </>
  );
};

export default InformationModal;
