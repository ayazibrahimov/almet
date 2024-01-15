import React from "react";
import styles from "./styles.module.css";
import { Roboto } from "next/font/google";
import solarLinear from "@/public/solarLinear1.png";
import Link from "next/link";
import Image from "next/image";
import Input from "@mui/material/Input"; // Correct import path
import Stack from "@mui/material/Stack"; // Correct import path


const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});
const roboto2 = Roboto({
  weight: "700",
  subsets: ["latin"],
});
const roboto3 = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const index = () => {
  return (
    <div className="grid grid-cols-12 gap-4 lg:my-20 my-10">
      <div className="lg:col-span-4 sm:col-span-6 col-span-12">
        <div>
          <h4 className={styles.titleInfoMail}>
            <Link href="https://almetbaku.com/">almetbakutrading.com </Link>{" "}
          </h4>

          <ul className={styles.infoAdresses}>
           
            {/*font-family: Roboto;*/}
            <li>
             
              <Link href="tel:+994512707575">
                {/* <span className={roboto.className} >T.</span>  */}
                +994 51 270 75 75
              </Link>
            </li>
            <li>
             
              <Link href="mailto:info@almettradingbaku.com">
               
                {/* <span className={roboto.className}>E.</span> */}
                 info@almettradingbaku.com
              </Link>
            </li>
            <li>
             
              {/* <span className={roboto.className}>Ü.</span> */}
               Azerbaijan, Baku, Alaskar Gayibov 10 q
            </li>
          </ul>
        </div>

        <div className="my-4 flex sm:justify-start justify-center">
          <div
            style={{ position: "relative", width: "220px", height: "220px" }}
          >
            <h5 className={styles.keepInTouch}>Keep in Touch</h5>
            <Image
              className={styles.rombs}
              src={solarLinear}
              alt="solarLinear"
              fill
            />
          </div>
        </div>

        <div className="mt-10">
          <h4 className={`${styles.turnIdea} ${roboto2.className}`}>
            We are ready to turn <br /> your idea into reality
          </h4>
        </div>
      </div>
      <div className="lg:col-span-8 sm:col-span-6 col-span-12">
        <div>
          <div className={styles.message}>
            <h4 className={roboto3.className}>Ready to start your project?</h4>
            <h4 className={roboto3.className}>
              Believe in our partnership success?
            </h4>
            <h4 className={roboto3.className}>Share your thoughts with us!</h4>
          </div>
        </div>

        <div className="flex gap-5 mt-8">
          <div className="w-2/4">
            <Stack spacing={2}>
              <Input
                placeholder="NAME"
                variant="soft"
                sx={{
                  "--Input-radius": "0px",
                  borderBottom: "1px solid",
                  borderColor: "neutral.outlinedBorder",
                  "&:hover": {
                    borderColor: "neutral.outlinedHoverBorder",
                  },
                  "&::before": {
                    border: "1px solid var(--Input-focusedHighlight)",
                    transform: "scaleX(0)",
                    left: 0,
                    right: 0,
                    bottom: "-2px",
                    top: "unset",
                    transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                    borderRadius: 0,
                  },
                  "&:focus-within::before": {
                    transform: "scaleX(1)",
                  },
                }}
              />
            </Stack>
          </div>
          <div className="w-2/4">
            <Stack spacing={2}>
              <Input
                placeholder="EMAIL*"
                variant="soft"
                sx={{
                  "--Input-radius": "0px",
                  borderBottom: "1px solid",
                  borderColor: "neutral.outlinedBorder",
                  "&:hover": {
                    borderColor: "neutral.outlinedHoverBorder",
                  },
                  "&::before": {
                    border: "1px solid var(--Input-focusedHighlight)",
                    transform: "scaleX(0)",
                    left: 0,
                    right: 0,
                    bottom: "-2px",
                    top: "unset",
                    transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                    borderRadius: 0,
                  },
                  "&:focus-within::before": {
                    transform: "scaleX(1)",
                  },
                }}
              />
            </Stack>
          </div>
        </div>

        <div>
            <Stack spacing={2} sx={{ height: '150px' }}>
              <Input
                placeholder="PROJECT İNFORMATİON*"
                variant="soft"
                sx={{
                    height: '100%',
                  "--Input-radius": "0px",
                  borderBottom: "1px solid",
                  borderColor: "neutral.outlinedBorder",
                  "&:hover": {
                    borderColor: "neutral.outlinedHoverBorder",
                  },
                  "&::before": {
                    border: "1px solid var(--Input-focusedHighlight)",
                    transform: "scaleX(0)",
                    left: 0,
                    right: 0,
                    bottom: "-2px",
                    top: "unset",
                    transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                    borderRadius: 0,
                  },
                  "&:focus-within::before": {
                    transform: "scaleX(1)",
                  },
                }}
              />
            </Stack>
        </div>



        <div className="mt-8 flex justify-end">
            <button className={styles.sendBtn}>Send</button>
        </div>




      </div>
    </div>
  );
};

export default index;
