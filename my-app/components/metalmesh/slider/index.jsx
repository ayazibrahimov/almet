import Flag from "@/public/flag-azerbaijan.png";
import Image from "next/image";
import styles from "./styles.module.css";
import Swiper from "../swiper";
import RoundedText from "../roundedtext";
import Title from "../title";


function Slider({data}) {

 


  return (
    <div className={styles.container}>
      <Title data={data} />

      <div>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderContainerSlider}>
          <div className="flex justify-end my-2">
          <p className={`flex gap-x-2 ${styles.upperParagraph}`}>
             {data.home_slide_up_right_text}
            <span><Image src={Flag} alt="Flag" /></span>
          </p>
        </div>
            <Swiper />
            <RoundedText data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
