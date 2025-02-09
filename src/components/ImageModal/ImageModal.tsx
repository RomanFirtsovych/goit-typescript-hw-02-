import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";
import { ImageModalProps } from "../../types";

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, image, onClose }) => {
  if (!isOpen || !image) return null; 

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.fullscreenModal}
      overlayClassName={styles.overlay}
      contentLabel="Image Fullscreen Modal"
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description || "Full-size Image"}
        className={styles.fullscreenImage}
      />
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
    </ReactModal>
  );
};

export default ImageModal;
