import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { ImageGalleryProps } from "../../types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image, index) => (
        <li key={`${image.id}-${index}`}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
