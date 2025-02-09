import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { SearchBarProps } from "../../types";

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(input);
    setInput("");
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search images and photos"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          <FaSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
