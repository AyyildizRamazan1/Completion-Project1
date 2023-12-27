import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const KartBilgi = ({ onKartBilgiSubmit }) => {
  const [resim, setResim] = useState(null);
  const [kartIsmi, setKartIsmi] = useState('');
  const [kartBilgisi, setKartBilgisi] = useState('');
  const navigate = useNavigate();
  const handleResimChange = (e) => {
    const file = e.target.files[0];
    setResim(file.name);
  };

  const handleKartIsmiChange = (e) => {
    setKartIsmi(e.target.value);
  };

  const handleKartBilgisiChange = (e) => {
    setKartBilgisi(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/satinal', { state: { src: `/images/${resim}`, alt: kartIsmi, info: kartBilgisi } });
  };
 
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center', margin: '0' }}>Kart Bilgi Ekle</h2>
        <label>
          Resim Seç:
          <input type="file" onChange={handleResimChange} accept="image/*" />
        </label>
        <label>
          Kart İsmi:
          <input type="text" value={kartIsmi} onChange={handleKartIsmiChange} />
        </label>
        <div style={{marginBottom:'10px'}}>
        <label style={{display:'block'}}>
          Kart Bilgisi:
          <textarea
           value={kartBilgisi}
            onChange={handleKartBilgisiChange}
            style={{width:'100%', minHeight:'150px'}}
            />
        </label>
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default KartBilgi;
