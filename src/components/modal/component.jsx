import { createPortal } from "react-dom";
import styles from "./styles.module.css";

export default function Modal({ children, onClose }) {
  console.log(styles);
  return createPortal(
    <>
      <div
      className={(styles.root)}
        onClick={onClose}
      />
      <div>{children}</div>
    </>,
    document.body
  );
}
