import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const Modal: React.FC<{
  children: ReactNode;
  title: string;
  onClose: () => void;
}> = (props) => {
  const modalRoot = document.getElementById("modal");

  return createPortal(
    <>
      <div className="backdrop" onClick={props.onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className="modal"
      >
        <h2>{props.title}</h2>
        {props.children}
      </motion.dialog>
    </>,
    modalRoot!
  );
};

export default Modal;
