import React from 'react';
import './OdemeFormu.css'
import { PatternFormat } from 'react-number-format';


const OdemeFormu = ({setShowOdemeFormu}) => {
  function closeOdeme(){
    setShowOdemeFormu(false)
  }
  return (
    
    <div className="modal">
      <button className='clsOdeme' onClick={closeOdeme}>X</button>
      <input type="text" placeholder='Kart Üstündeki İsim Soyisim' />
      <input type="text" pattern='\d*' maxLength="16" placeholder="Kredi Kartı Numarası" />
     
      <div className="expiration-date">
        <PatternFormat displayType="input"  format="## / ##" placeholder='Kredi Kartı Numarası'/>
      </div>
      
      <input type="password" pattern="\d{3}" maxLength="3" placeholder="CVV" />

      <button>Ödeme Yap</button>
    </div>
  );
}

export default OdemeFormu;