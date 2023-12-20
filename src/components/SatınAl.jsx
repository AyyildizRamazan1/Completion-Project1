import React, { useState } from "react";
import Navbar from "./Navbar";
import { GiBuyCard } from "react-icons/gi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { redirect } from "react-router-dom";
import Modal from "../modals/modals";
import { BrowserRouter as Router } from 'react-router-dom';

const SatınAl = () => {
  const [isModalOpen, setModalOpen ]= useState(false);
  const openModal= () =>{
    setModalOpen(true);
  }
  const closeModal =() =>{
    setModalOpen(false);
  }


  const images = [
    {
        src: "/images/kart-resim.jpg",
        alt: "esp32 kartı",
       
    },
    {
      src: "/images/kart-resim1.jpg",
      alt: "esp32 kartı",
    },

    {
      src: "/images/kart-resim1.jpg",
      alt: "esp32 kartı",
    },
    {
      src: "/images/kart-resim1.jpg",
      alt: "esp32 kartı",
    },
    {
      src: "/images/kart-resim.jpg",
      alt: "esp32 kartı",
     
  },
   
  ];

  return (
    <div>
      
      <Navbar/>
      <div className="parent">
      <Boxes images={images} openModal= { openModal}/>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal İçeriği</h2>
        <p>Bu bir modal penceresidir</p>
      </Modal>
      
    </div>
  );
};

const buttonStyle = {
  width: "45%",
  marginRight:"3px",
  fontSize: "12px",
  display:"flex",
  alignItems:"center",
  justifyContent:"evenly"
  
};
const buttonTextContainer = {
  fontSize: "14px",
  textAlign: "center",
  margin:"0 10px"
};

const Boxes = ({ images, openModal,isModalOpen,closeModal }) => {
  const boxes = images.map((image,index) => {
    const box = (
      <div
      key={index}
        width={250}
        height={250}
        style={{
          border: "1px solid black",
          margin: "20px auto",
          padding: "20px",
          width: "250px",
          height: "350px", 
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={image.src}
         alt={image.alt} 
         style={{ width: "100%", maxHeight: "100%", objectFit: "contain" }}

         />
        <p>esp-32 kartı</p>
        <div style={{ width:"100%", display:"flex"}}>
          <button style={buttonStyle}  >
           <span style={buttonTextContainer}>Satın Al</span> 
           <GiBuyCard />
            </button>
        <button style={buttonStyle} onClick={() => openModal()}>
         <span style={buttonTextContainer}>Bilgi Al</span> 
         <IoMdInformationCircleOutline size={20}/>
          </button>
          
        </div>
        
      </div>
    );
    return box;
  });
  return boxes;
};



export default SatınAl;