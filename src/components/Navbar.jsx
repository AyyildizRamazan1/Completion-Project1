import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onKayitOlClick, onOdemeYapClick, onAnasayfaClick, kullanici }) => {
  const [seceneklerVisible, setSeceneklerVisible] = useState(false);

  const toggleSecenekler = () => {
    setSeceneklerVisible(!seceneklerVisible);
  };

  return (
     
        <nav className="navbar">
          <div className="left-section"></div>
          <button onClick={onOdemeYapClick} className="btn-ödeme">
            Ödeme Sayfası
          </button>
          <button onClick={onKayitOlClick} className="btn-kayıtol">
            Kayıt ol
          </button>
          <button onClick={onAnasayfaClick} className="btn-anasayfa">
            Anasayfa
          </button>
          {kullanici && (
            <div className="kullanici-menu">
              <button className="kullanici-menu-btn">
                {kullanici.isim} {kullanici.soyisim}
              </button>
              <div className="kullanici-menu-dropdown">
              <ul class="demo-dropdown">
        <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Çıkış Yap</a></li>
        </ul>
    
</ul>
              </div>
            </div>
          )}
        </nav>
      );
    };

export default Navbar;