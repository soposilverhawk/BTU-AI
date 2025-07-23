import React from "react";
import styles from "./DropDownToggler.module.css";

function DropDownToggler({ isFAQExpanded, toggleFAQState }) {
  return (
    <button className={styles.btn} onClick={toggleFAQState}>
      <span className={styles.horizontalLine}></span>
      <span
        className={`${styles.verticalLine} ${
          isFAQExpanded ? styles.collapsed : styles.expanded
        }`}
      ></span>
    </button>
  );
}

export default DropDownToggler;
