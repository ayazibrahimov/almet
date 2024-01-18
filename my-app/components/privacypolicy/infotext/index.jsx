import React from "react";
import styles from "./styles.module.css";
import { Roboto } from "next/font/google";
import List from "../list";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const index = ({ datas }) => {
  return (
    <div className="mt-52">
      <h3 className={styles.title}>{datas.heading}</h3>
      {datas.info && (
        <p className={`${roboto.className} ${styles.paragraph}`}>
          {datas.info}
        </p>
      )}

      <List items={datas.items} />
    </div>
  );
};

export default index;
