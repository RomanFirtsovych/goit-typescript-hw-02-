import styles from "./ImageCard.module.css";
import { ImageCardProps } from "../../types";

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className={styles.image}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
