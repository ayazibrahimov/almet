import React from "react";
import Image from "next/image";
import DropFilter from "@/components/dropfilter";
import styles from "./styles.module.css";
import Fancybox from "@/components/Fancy/FancyBox";

const getData = async (lang) => {
  // console.log(lang);
  try {
    const response = await fetch("https://admin.almetbaku.az/api/products", {
      method: "GET",
      headers: {
        "Accept-Language": lang,
      },
    });
    const datas = await response.json();
    return datas.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null or handle the error appropriately
  }
};
const getTitle = async (lang) => {
  // console.log(lang);
  try {
    const response = await fetch("https://admin.almetbaku.az/api/static-texts", {
      method: "GET",
      headers: {
        "Accept-Language": lang,
      },
    });
    const datas = await response.json();
    return datas.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null or handle the error appropriately
  }
};

 const ProductDetail = async ({lang,id}) => {

  const cards = await getData(lang);
  const title = await getTitle(lang)

  const infos = cards.find((product) => product.id == id);

 

  // console.log(infos.images);
 

  

  return (

    <div className="bg-[#F5F5F5]">
      <div className="lg:container lg:mx-auto lg:px-16 sm:px-8 px-4 py-16 text-[#333333]">
        <h2 className="text-center font-bold xl:text-[74px] lg:text-[64px] sm:text-[56px] text-4xl uppercase">
          {title?.menu_products}
        </h2>

       
   
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <div className="p-5 md:p-10 mt-4">
            <div class="grid md:grid-cols-4 grid-cols-2 gap-2">
              
             
              {
                infos?.images?.map((image,index)=>(
                  <div key={index}  className="mt-2">
                     <a
                      style={{display:'block',height:'100%'}}
                     href={`https://admin.almetbaku.az/storage/${image}`}
                    data-fancybox="gallery"
                  > 
                    <img style={{height:'100%', objectFit:"cover"}} src={`https://admin.almetbaku.az/storage/${image}`} alt="" />
                  </a>
                  </div>
                ))
              }
            
            </div>
          </div>
        </Fancybox>

       
      </div>
    </div>
  );
};

export default ProductDetail;
