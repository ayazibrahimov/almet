"use client";
import React, { useState, useEffect } from "react";
("use strict");
import styles from "./styles.module.css";
import upBtn from "@/public/upBtn1.svg";
import Image from "next/image";

const FixedButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    // Check the scroll position
    const scrollY = document.documentElement.scrollTop;

    // Update the state to show/hide the button based on the scroll position
    // setShowButton(scrollY > 200);

    if (scrollY > 800) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton ? (
        <button id="fixedButton" onClick={scrollToTop} className={styles.btn}>
          <Image src={upBtn} />
        </button>
      ) : null}
    </div>
  );
};

export default FixedButton;
