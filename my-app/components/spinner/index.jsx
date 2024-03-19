import React from "react";
import Loading2 from "@/public/loading2.gif";
import Image from "next/image";


// .placeholder {
//     width: 100%;
//     height: 100%;
//     background-color: #f0f0f0; /* Set your desired placeholder color here */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #666; /* Set your desired text color for the placeholder */
//     font-size: 14px;
//   }

const index = () => {
  return (
    <div
      style={{
        position:'absolute',
        width:'100%',
        height:'100%',
        zIndex:'500',
        position:'absolute',
        backgroundColor:'#4c4c4c'
      }}
    >
      <Image
        src={Loading2}
        style={{
          position: "absolute",
          zIndex: "1111",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50px",
          height: "50px",
        }}
        alt="spinner"
        loading="eager"
        width={50}
        height={50}
      />
    </div>
  );
};

export default index;
