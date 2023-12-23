import React from "react";
import styles from "./styles.module.css";
import Slider from "./slider";
import InfoText from "./infotext";
import Features from "./features";

function MetalMesh() {
  return (
    <section>
      <div className={styles.container}>
        <div className="sm:container sm:mx-auto px-8">
          <Slider />
          <InfoText />
          <Features />
        </div>
      </div>
    </section>
  );
}

export default MetalMesh;
