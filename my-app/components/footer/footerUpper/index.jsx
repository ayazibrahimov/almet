import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Upper = () => {
  return (
      <div className={`sm:container sm:mx-auto py-32 px-10 text-center ${styles.container}`}>
        <div className={styles.circle}>ABT</div>
        <div className="mt-20 mb-32">
          <h2 className={styles.heading}>
            Let's <span className={styles.underline}>create</span> together.
          </h2>
        </div>

        <div>
          <Link className={styles.link} href="/">
            almetbakutrading.com
          </Link>
        </div>
      </div>

  );
};

export default Upper;
