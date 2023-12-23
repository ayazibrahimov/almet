'use client'
import { useEffect, useState } from 'react';
import React from "react";
import Logo from "./logo/index";
import NavMenu from "./navmenu/index";

function index() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [statusInfo, setStatusInfo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      if(window.scrollY >= 1400){
        setStatusInfo(true)
      }else{
        setStatusInfo(false)
      }

    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const headerStyle = {
    position: scrollPosition > 1400 ? 'fixed' : 'static',
    top: 0,
    left:0,
    right:0,
    zIndex:555,
    width: '100%',
    backgroundColor: scrollPosition > 1400 ? '#ffffff' : 'transparent',
    boxShadow: scrollPosition > 1400 ? '0 2px 8px rgba(0, 0, 0, 0.4)' : 'none',
    transition: 'transform 0.6s ease',
    transform: scrollPosition > 1400 ? 'translateY(0px)' : 'none',

  };


  




  return (
    <div style={headerStyle}>
      <div className={`sm:container sm:mx-auto ${ statusInfo ? 'py-1' : 'py-4' } `}>
        <nav className="grid grid-cols-3 gap-40">
          <Logo statusInfo={statusInfo} />
          <NavMenu  statusInfo={statusInfo} />
        </nav>
      </div>
    </div>
  );
}

export default index;
