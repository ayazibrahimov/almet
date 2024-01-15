import React from "react";
import styles from "./styles.module.css";
import ImageRectangle from "@/public/Frame 235.png";
import Image from "next/image";
import circle1 from "@/public/circle1.png";
import circle2 from "@/public/circle2.png";
import circle3 from "@/public/circle3.png";

const Ironmensh = () => {
  // const styleRectangleSize = {
  //   position: "relative",
  //   width: "504px",
  //   height: "504px",
  // };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className={styles.info}>
          Simplifying <span style={{ color: "#DAA520" }}>Iron Mesh</span> <br />
          Production with <br />
          <span style={{ borderBottom: "1px solid #fff" }}>Automation</span>
        </h2>
        <div className="text-center mt-8 px-8">
          <div className={styles.styleRectangleSize}>
            <Image src={ImageRectangle} alt="rectangle" fill />

            <h3 className={styles.textMiddle}>Mesh production</h3>

            <span className={styles.line1}>
              <Image className={styles.image1} src={circle1} fill />
            </span>
            <span className={styles.line2}>
              <Image className={styles.image2} src={circle2} fill />
            </span>
            <span className={styles.line3}>
              <Image className={styles.image3} src={circle3} fill />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ironmensh;
