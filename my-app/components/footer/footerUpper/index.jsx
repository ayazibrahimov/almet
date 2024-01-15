import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Upper = () => {
  return (
      <div className={`lg:container lg:mx-auto py-32 lg:px-10 px-6 text-center ${styles.container}`}>
        <div className={styles.circle}>ABT</div>
        <div className="md:mt-20 md:mb-32 mt-10 mb-10">
          <h2 className={styles.heading}>
            Let's <span className={styles.underline}>create</span> together.
          </h2>
        </div>

        <div>
          <span className={styles.link} href="/">
            almetbaku
          </span>
        </div>
      </div>

  );
};

export default Upper;
