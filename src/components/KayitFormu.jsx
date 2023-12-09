import React, { useState } from 'react';
import db from '../utils/firebase'; // Firebase yapılandırma dosyanızın yolunu doğru bir şekilde belirtin.
import { addDoc, collection } from "firebase/firestore";
import './KayitFormu.css';


function KayitFormu({ setShowKayitFormu }) {
  const [formData, setFormData] = useState({
    isim: '',
    soyisim: '',
    tcKimlik: '',
    cinsiyet: '',
    telefonNumarasi: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  function isTcKimlikValid(tc) {
    const lastDigit = parseInt(tc.slice(-1), 10);
    return lastDigit % 2 === 0;  // Son rakamın çift olup olmadığını kontrol eder.
  }

  function isTelefonValid(telefon) {
    return telefon.startsWith('0') && telefon.length === 11;
  }

  function closeModal(){
    setShowKayitFormu(false)
  }


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!isTcKimlikValid(formData.tcKimlik)) {
        alert("TC Kimlik numarasının son rakamı çift olmalıdır.");
        return; // Formu gönderme
    }

    if (!isTelefonValid(formData.telefonNumarasi)) {
        alert("Telefon numarası 11 hane olmalı ve 0 ile başlamalıdır.");
        return; // Formu gönderme
    }

    try {
      await addDoc(collection(db, "kullanicilar"), formData);
      console.log('Kullanıcı başarıyla eklendi!');
      window.alert("Kayıt Başarıyla Eklendi...")
      setFormData({
        isim: '',
        soyisim: '',
        tcKimlik: '',
        cinsiyet: '',
        telefonNumarasi: ''
      });
      setShowKayitFormu(false);//Kayıt formu gizleme props olarak içe aldık

    } catch (error) {
      console.error("Kullanıcı eklenirken bir hata oluştu:", error);
    }
  };

  return (
    <> <div className='overlay'></div>
    <form className='modal' onSubmit={handleSubmit}>
      <button className='closebutton' onClick={closeModal}>X</button>
      <div>
        
        <label>İsim</label>
        <input type="text" name="isim" value={formData.isim} onChange={handleChange} required />
      </div>

      <div>
        <label>Soyisim</label>
        <input type="text" name="soyisim" value={formData.soyisim} onChange={handleChange} required />
      </div>

      <div>
        <label>TC Kimlik</label>
        <input type="text" name="tcKimlik" value={formData.tcKimlik} onChange={handleChange} minLength={11} maxLength={11} pattern="\d*" required />
      </div>

      <div>
        <label>Cinsiyet</label>
        <select name="cinsiyet" value={formData.cinsiyet} onChange={handleChange} required>
          <option value="">Seçiniz</option>
          <option value="Erkek">Erkek</option>
          <option value="Kadın">Kadın</option>
          <option value="Diğer">Diğer</option>
        </select>
      </div>

      <div>
        <label>Telefon Numarası</label>
        <input type="tel" name="telefonNumarasi" value={formData.telefonNumarasi} onChange={handleChange} minLength={11} maxLength={11} pattern="\d*" required />
      </div>
      <button type="submit">Kayıt Ol <i className="fa-solid fa-check" ></i> </button>
      
    </form>
    </>
  );
}

export default KayitFormu;