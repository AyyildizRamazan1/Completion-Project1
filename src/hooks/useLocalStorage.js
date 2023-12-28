import React, { useState, useEffect } from "react";

function useLocalStorage() {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    let Img = localStorage.getItem("îmgs");
    setImages(JSON.parse(Img));
    console.log(Images);
  }, [Images]);

  const writeImage = (e) => {
    let a = JSON.parse(localStorage.getItem("imgs"));
    console.log(a);
    if (a) {
      console.log(a);
      a.push(e);
      localStorage.setItem("imgs", JSON.stringify(a));
    } else {
      let b = [];
      b.push(e);
      localStorage.setItem("imgs", JSON.stringify(b));
    }
  };

  return { Images, writeImage }; // Değerleri döndür
}

export default useLocalStorage;
