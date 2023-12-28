import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { GiBuyCard } from "react-icons/gi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { redirect } from "react-router-dom";
import Modal from "../modals/modals";
import { BrowserRouter as Router } from 'react-router-dom';
import KartBilgi from "./KartBilgi";
import { useLocation } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const SatınAl = () => {
  const [isModalOpen, setModalOpen ]= useState(false);
  const [selectedKart, setSelectedKart] = useState(null);

  const closeModal =() =>{
    setModalOpen(false);
  }

  const handleKartBilgiSubmit = (kartBilgileri) => {
    setSelectedKart(kartBilgileri);
    setModalOpen(true);
  };

const Images = JSON.parse( localStorage.getItem('imgs'))
console.log(Images);

const [InfoData, setInfoData] = useState('');
const openModal= async (e) =>{
  const inf = await e; 
  setInfoData(inf)
  setModalOpen(true);
}

  return (
    <div>
      
      <Navbar/>
      <div className="parent">
      <Boxes images={Images} openModal= { openModal}/>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {InfoData}
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
        <p>{image.alt}</p>
        <div style={{ width:"100%", display:"flex"}}>
          <button style={buttonStyle}  >
           <span style={buttonTextContainer}>Satın Al</span> 
           <GiBuyCard />
            </button>
        <button style={buttonStyle} onClick={() => openModal(image.info)}>
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