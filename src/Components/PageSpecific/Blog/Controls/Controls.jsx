import React, { useState, useEffect } from "react";
import styles from "./Controls.module.css";
import nextArrow from "../../../../assets/shared/arrows/next-arrow.png";
import previousArrow from "../../../../assets/shared/arrows/back-arrow.png";

function Controls({ dataLength }) {
  const totalPages = Math.ceil(dataLength / 5);
  const [currentPage, setCurrentPage] = useState(1);

  // Helper function to build the page buttons with ellipsis
  const getPageButtons = () => {
    const buttons = [];

    // Always show first page
    buttons.push(1);

    // Determine range of pages around current page to show
    let start = Math.max(currentPage - 1, 2); // avoid duplicate 1
    let end = Math.min(currentPage + 1, totalPages - 1); // avoid duplicate last page

    // Add ellipsis after first page if gap
    if (start > 2) {
      buttons.push("...");
    } else {
      // If no ellipsis needed, show pages between 2 and start-1
      for (let i = 2; i < start; i++) {
        buttons.push(i);
      }
    }

    // Add pages around currentPage
    for (let i = start; i <= end; i++) {
      buttons.push(i);
    }

    // Add ellipsis before last page if gap
    if (end < totalPages - 1) {
      buttons.push("...");
    } else {
      // If no ellipsis needed, show pages between end+1 and last-1
      for (let i = end + 1; i < totalPages; i++) {
        buttons.push(i);
      }
    }

    // Always show last page (if totalPages > 1)
    if (totalPages > 1) {
      buttons.push(totalPages);
    }

    return buttons;
  };

  const handlePageClick = (page) => {
    if (page === "...") return; // do nothing on ellipsis
    setCurrentPage(page);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className={styles.controlsWrapper}>
      <div className={styles.controlsContainer}>
        {currentPage !== 1 && (
          <button className={styles.controlBase} onClick={handlePrev}>
            <img src={previousArrow} alt="previous-arrow" width="16px"/>
          </button>
        )}

        {getPageButtons().map((page, idx) => (
          <button
            key={idx}
            className={
              page === currentPage ? styles.active : styles.controlBase
            }
            onClick={() => handlePageClick(page)}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}

        {currentPage !== totalPages && (
          <button className={styles.controlBase} onClick={handleNext}>
            <img src={nextArrow} alt="previous-arrow" width="16px"/>
          </button>
        )}
      </div>
    </div>
  );
}

export default Controls;
