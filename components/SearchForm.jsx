import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./SearchForm.module.css";

export default function SearchForm({ initialValue = "" }) {
  const [value, setValue] = useState(initialValue);
  const router = useRouter();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      router.push("/");
      return;
    }
    router.push(`/search?q=${value}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        name="q"
        value={value}
        placeholder="영화를 검색해보세요"
        onChange={handleChange}
      />
      <button className={styles.button}>검색</button>
    </form>
  );
}
