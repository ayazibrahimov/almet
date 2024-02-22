"use client";
import React from "react";
import Navigation from "./navigation";
import Logo from "@/public/almetMobileLogo.png";
import Image from "next/image";
import Link from "next/link";
// import useProductData from "@/api/agent";

const index = () => {
  // const { datas, loading, error } = useProductData("/static-media");

  // if (loading) {
  //   return null; // or return loading indicator, message, etc.
  // }

  // if (error) {
  //   return null; // or return error message, try again button, etc.
  // }

  // const { data } = datas || {};

  // console.log(data);

  return (
    <div className="px-6 py-2">
      <div className="flex justify-between items-center">
        <div style={{ position: "relative", width: "132px", height: "58px" }}>
          <Link href="/">
            <Image
              priority
              src={Logo}
              alt="Logo"
              loading="eager"
              fill
            />
          </Link>
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default index;
