import React from "react";
import Flag from "@/public/flag-azerbaijan.png";
import Image from "next/image";
import styles from "./styles.module.css";
import Swiper from "../swiper";
import RoundedText from "../roundedtext";
import Title from "../title";

function Slider() {
  return (
    <div className={styles.container}>
      <Title />

      <div>

        <div className={styles.sliderContainer}>
          <div className={styles.sliderContainerSlider}>
          <div className="flex justify-end my-2">
          <p className={`flex gap-x-2 ${styles.upperParagraph}`}>
            Iron products produced in Baku
            <Image src={Flag} alt="Flag"></Image>
          </p>
        </div>
            <Swiper />
            <RoundedText />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
