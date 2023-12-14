import React from "react";
import kartResim from "../images/kart-resim.jpg"

const Boxes = ({ images }) => {
  const boxes = images.map((image) => {
    const box = (
      <div
        width={250}
        height={250}
        style={{
          border: "1px solid black",
          margin: "20px 20px 20px 20px",
          padding: "20px 20px 20px 20px",
          width: "150px",  
          height: "150px", 
          borderRadius:"10px"
        }}
      >
        <img src={image.src}
         alt={image.alt} 
         style={{ width: "100%", maxHeight: "100%", objectFit: "contain" }}

         />
        <p>esp-32 kartı</p>
        <button >Satın Al</button>
        <button>Sepete Ekle</button>
      </div>
    );
    return box;
  });
  return boxes;
};

const SatınAl = () => {
  const images = [
    {
        src: kartResim,
        alt: "esp32 kartı",
        
    },
   
  ];

  return (
    <div>
      <Boxes images={images} />
    </div>
  );
};

export default SatınAl;