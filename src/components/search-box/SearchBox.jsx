import React from "react";
import styles from "./SearchBox.module.css";

export const SearchBox = ({ setSearchField }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search monsters"
        onChange={(e) => setSearchField(e.target.value)}
        className={styles.mainInput}
      />
    </div>
  );
};
