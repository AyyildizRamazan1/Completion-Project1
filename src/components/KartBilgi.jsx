import React, { useState } from 'react';

const KartBilgi = ({ onKartBilgiSubmit }) => {
  const [resim, setResim] = useState(null);
  const [kartIsmi, setKartIsmi] = useState('');
  const [kartBilgisi, setKartBilgisi] = useState('');

  const handleResimChange = (e) => {
    const file = e.target.files[0];
    setResim(file);
  };

  const handleKartIsmiChange = (e) => {
    setKartIsmi(e.target.value);
  };

  const handleKartBilgisiChange = (e) => {
    setKartBilgisi(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onKartBilgiSubmit({ resim, kartIsmi, kartBilgisi });
  };
  const hh2baslık={
    textAlign:"center",
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <h2 style={hh2baslık}>Kart Bilgi Ekle</h2>
        <label>
          Resim Seç:
          <input type="file" onChange={handleResimChange} accept="image/*" />
        </label>
        <label>
          Kart İsmi:
          <input type="text" value={kartIsmi} onChange={handleKartIsmiChange} />
        </label>
        <label>
          Kart Bilgisi:
          <textarea value={kartBilgisi} onChange={handleKartBilgisiChange} />
        </label>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default KartBilgi;
