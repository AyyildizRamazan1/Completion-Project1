import React, { useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import KayitFormu from "./KayitFormu";
import OdemeFormu from "./OdemeFormu";
import GirisFormu from "./GirisFormu";
import db from "../utils/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import InterCom from "./InterCom";
import { Link } from "react-router-dom";


function App() {
  const [showKayitFormu, setShowKayitFormu] = useState(false);
  const [showOdemeFormu, setShowOdemeFormu] = useState(false);
  const [kullanici, setKullanici] = useState(null);
  const [showGirisFormu, setShowGirisFormu] = useState(false);
  const [hataMesaji, setHataMesaji] = useState("");
  const [isInterComVisible, setIsInterComVisible] = useState(false);
  const [isKullaniciVisible, setKullaniciVisible] = useState(false);
  const [seceneklerVisible, setSeceneklerVisible] = useState(false);

  const handleAnasayfaClick = () => {
    setShowKayitFormu(false);
    setShowOdemeFormu(false);
    setShowGirisFormu(false);
    setIsInterComVisible(false);
  };

  const handleKayitOlClick = () => {
    setShowKayitFormu(!showKayitFormu);
    setShowOdemeFormu(false);
    setShowGirisFormu(false);
  };

  const handleOdemeYapClick = () => {
    // Yeni yönlendirme fonksiyonu ekleyin.
    setShowOdemeFormu(!showOdemeFormu); // Ödeme formunu göster ya da gizle.
    setShowKayitFormu(false);
    setShowGirisFormu(false);
  };
  const handleGirisYapClick = () => {
    setShowGirisFormu(!showGirisFormu);
    setShowKayitFormu(false);
    setShowOdemeFormu(false);
    setHataMesaji("");
  };
  const toggleSecenekler = () => {
    setSeceneklerVisible(!seceneklerVisible);
  };

  const handleGiris = async (telefon, tcKimlik) => {
    const kullanicilarCollection = collection(db, "kullanicilar");
    const q = query(
      kullanicilarCollection,
      where("telefonNumarasi", "==", telefon),
      where("tcKimlik", "==", tcKimlik)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.error("Döküman bulunamadı");
      setHataMesaji("Girdiğiniz bilgiler hatalı!");
      return;
    } else {
      setHataMesaji("");
    }

    querySnapshot.forEach((doc) => {
      // Eşleşen kullanıcıyı bulduk
      const kullaniciData = doc.data();
      setKullanici({
        isim: kullaniciData.isim,
        soyisim: kullaniciData.soyisim,
      });

      setShowGirisFormu(false);
    });
  };

  const handleCardClick = (action) => {
    if (action === "kayıtol") {
      setShowKayitFormu(true);
      setShowOdemeFormu(false);
      setShowGirisFormu(false);
      setIsInterComVisible(false);
    } else if (action === "ödemesayfası") {
      setShowOdemeFormu(true);
      setShowKayitFormu(false);
      setShowGirisFormu(false);
      setIsInterComVisible(false);
    } else if (action === "girişyap") {
      handleGirisYapClick();
    } else if (action == "verigöster") {
      setIsInterComVisible(true);
      setShowOdemeFormu(false);
      setShowKayitFormu(false);
      setShowGirisFormu(false);
       
    }
  };
  return (
    <div>
      <Navbar
        onKayitOlClick={handleKayitOlClick}
        onOdemeYapClick={handleOdemeYapClick}
        onAnasayfaClick={handleAnasayfaClick}
        kullanici={kullanici}
        isKullaniciVisible={isKullaniciVisible}
        setKullaniciVisible={setKullaniciVisible}
      />
      {showKayitFormu && <KayitFormu setShowKayitFormu={setShowKayitFormu} />}
      {showOdemeFormu && <OdemeFormu setShowOdemeFormu={setShowOdemeFormu} />}
      {showGirisFormu && (
        <>
          {hataMesaji && <p className="hata-mesaji">{hataMesaji}</p>}
          <GirisFormu
            onGiris={handleGiris}
            showGirisFormu={showGirisFormu}
            onGirisYapClick={handleGirisYapClick}
          />
        </>
      )}
      {isInterComVisible && (
        <InterCom
          isVisible={isInterComVisible}
          onClose={() => setIsInterComVisible(false)}
        />
      )}

      {/* Diğer bileşenler ve içerik */}
      {!showGirisFormu && (
        <div className="main-content">
          <div className="cards-container">
            {[

              {name:"Kayıt Ol", href:""},
              {name:"Ödeme Sayfası", href:""},
              {name:"Giriş Yap",href:""},
              {name:"Veri göster",href:""},
              {name:"Satın Al",href:"/satinal"},
              {name:"Kart Bilgi Ekle",href:"/kartbilgi"},
              "Kart 7",
              "Kart 8",
              "Kart 9",
            ].map((cardName, index) => (
              <Link to={cardName.href}>
              
              <div
              
                key={index}
                className="card"
                onClick={() =>
                  handleCardClick(cardName.name.toLowerCase().replace(" ", ""))
                }
              >

                {cardName.name}
              </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
