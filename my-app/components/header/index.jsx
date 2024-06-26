'use client'
import { useEffect, useState } from 'react';
import React from "react";
import Logo from "./logo/index";
import NavMenu from "./navmenu/index";
import MobileNav from '../mobileNav' 
import styles from './styles.module.css' 



function index() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [shown,setShown] = useState(true)
  const [statusInfo, setStatusInfo] = useState(false)
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  const handleScreenResize = () => {
    // Get the current screen width
    const screenWidth = window.innerWidth;

    // Update the state based on the screen width
    setIsScreenSmall(screenWidth <= 991);
  };
  

  useEffect(() => {
    handleScreenResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleScreenResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);


  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    // Check if scrollY is more than 800
    if (window.scrollY > 800) {
      // Call your custom function here
      setStatusInfo(true)
    }else{
      setStatusInfo(false)
    }
  };


  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const headerStyle = {
    position: scrollPosition > 800 ? 'fixed' : 'static',
    top: 0,
    left:0,
    right:0,
    zIndex:555,
    width: '100%',
    backgroundColor: scrollPosition > 800 ? '#ffffff' : 'transparent',
    boxShadow: scrollPosition > 800 ? '0 2px 8px rgba(0, 0, 0, 0.4)' : 'none',
    transition: 'transform 0.6s ease',
    transform: scrollPosition > 1400 ? 'translateY(0px)' : 'none',
  };


  const handleShown = () =>{
    if(!shown){
      setShown(true);
    }
  }

  

  return (
    <div style={headerStyle} onClick={handleShown}>
      <div className={`lg:container lg:mx-auto ${ statusInfo ? 'py-1' : 'py-4' } `}>
          <div className={styles.mobileNavBar}><MobileNav /></div>
          <div className={styles.desktopNavBar}>
            <nav className="grid grid-cols-4 gap-40">
              <Logo statusInfo={statusInfo} />
              <NavMenu shown={shown} setShown={setShown} statusInfo={statusInfo} />
            </nav>
          </div>
      </div>
    </div>
  );
}

export default index;
