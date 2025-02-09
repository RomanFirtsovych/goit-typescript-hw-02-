import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Image } from "./types";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = useCallback(async () => {
    if (!query) return;

    if (!UNSPLASH_ACCESS_KEY) {
      console.error("❌ ERROR: Unsplash API key is missing! Check your .env file.");
      setError("API Key is missing!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<{ results: Image[] }>(
        "https://api.unsplash.com/search/photos",
        {
          params: { query, page, per_page: 12 },
          headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
        }
      );

      const newImages = response.data.results;

      setImages((prev) => {
        const uniqueImages = [...prev, ...newImages].filter(
          (img, index, self) => index === self.findIndex((i) => i.id === img.id)
        );
        return uniqueImages;
      });

      setHasMore(newImages.length > 0);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.message);
      } else {
        setError("Unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    fetchImages();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSubmit={setQuery} />
      <Toaster />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setModalImage} />
      {loading && <Loader />}
      {hasMore && !loading && <LoadMoreBtn onClick={() => setPage(page + 1)} />}
      {modalImage && (
        <ImageModal isOpen={!!modalImage} image={modalImage} onClose={() => setModalImage(null)} />
      )}
    </div>
  );
};

export default App;
