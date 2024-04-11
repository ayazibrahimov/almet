'use client'
import React,{useState} from "react";
import styles from "./styles.module.css";
import { Roboto } from "next/font/google";
import solarLinear from "@/public/solarLinear1.png";
import Link from "next/link";
import Image from "next/image";
import Input from "@mui/material/Input"; // Correct import path
import Stack from "@mui/material/Stack"; // Correct import path
import useProductData from '@/hooks/api'
import ContactList from "./ContactList/index";


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

  const [name,setName] = useState('')
  const [sureName,setSureName] = useState('')
  const [text,setText] = useState('')
  
  
const { datas: staticTextsData, loading: staticTextsLoading, error: staticTextsError } = useProductData("/static-texts");

if (staticTextsLoading) {
  return null; // or return loading indicator, message, etc.
}

if (staticTextsError) {
  return null; // or return error message, try again button, etc.
}



function handleDataSend(){


  const bodyData = JSON.stringify({
    name: name,
    sureName: sureName,
    text: text
  });





  fetch('https://admin.almetbaku.az/api/send-message',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:bodyData
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    console.log(response);
    return response.json();
  }).then(data => {
    console.log('Message sent:', data);
    // Do something with the response data
  }).catch(error => {
    console.error('Error sending message:', error);
    // Handle the error as per your requirement
  });
}




  return (
    <div className="grid grid-cols-12 gap-4 lg:my-20 my-10">
      <div className="lg:col-span-4 sm:col-span-6 col-span-12">
        <div>
          {/* <h4 className={styles.titleInfoMail}>
            <Link href="https://almetbaku.com/">almetbakutrading.com </Link>
          </h4> */}

          <ContactList />

        </div>

        <div className="my-4 flex sm:justify-start justify-center">
          <div
            style={{ position: "relative", width: "220px", height: "220px" }}
          >
            <h5 className={styles.keepInTouch}>{staticTextsData.data.contact_keep_in}</h5>
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
           {staticTextsData.data.contact_we_are_ready}<br /> {staticTextsData.data.contact_your_idea}
          </h4>
        </div>
      </div>
      <div className="lg:col-span-8 sm:col-span-6 col-span-12">
        <div>
          <div className={styles.message}>
            <h4 className={roboto3.className}>{staticTextsData.data.contact_ready_to_start}</h4>
            <h4 className={roboto3.className}>
              {staticTextsData.data.contact_believe_in_our}
            </h4>
            <h4 className={roboto3.className}>{staticTextsData.data.contact_share_your}</h4>
          </div>
        </div>

        <div className="flex gap-5 mt-8">
          <div className="w-2/4">
            <Stack spacing={2}>
              <Input
                placeholder={`${staticTextsData.data.contact_form_name}`}
                variant="soft"
                onChange={(e)=>setName(e.target.value)}
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
                placeholder={`${staticTextsData.data.contact_form_emmail}`}
                onChange={(e)=>setSureName(e.target.value)}
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
                placeholder={`${staticTextsData.data.contact_form_information}`}
                variant="soft"
                onChange={(e)=>setText(e.target.value)}
                sx={{
                    height: '100%',
                  "--Input-radius": "0px",
                  width:'100%',
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
            <button onClick={handleDataSend} className={styles.sendBtn}>{staticTextsData.data.contact_form_send}</button>
        </div>




      </div>
    </div>
  );
};

export default index;
