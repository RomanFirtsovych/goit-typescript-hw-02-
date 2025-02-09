export interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description?: string;
}

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export interface ImageCardProps {
  image: Image;
  onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  image: Image;
  onClose: () => void;
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export interface ErrorMessageProps {
  message: string;
}
