import React, { useState } from 'react';
import './GirisFormu.css'


function GirisFormu({ onGiris, onGirisYapClick}) {
    const [telefon, setTelefon] = useState('');
    const [tcKimlik, setTcKimlik] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onGiris(telefon, tcKimlik);
    }
//     //APİ bağlama alanı ********************************
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:5000/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({email: telefon, password: tcKimlik})
//         })
//         .then(res => res.json())
//         .then(res => console.log(res))
//     }
// //************************************************* Api Bitiş Alanı
    
    return (
        
        <div className="signin">
            <div className="content">
            <div className="kapat-buton" onClick={onGirisYapClick}>
          &#10006;
        </div>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit} className="form">
                    <div className="inputBox">
                        <input 
                            type="tel" 
                            
                            value={telefon} 
                            onChange={(e) => setTelefon(e.target.value)}
                            required 
                        />
                        <i>Telefon Numarası</i>
                    </div>
                    <div className="inputBox">
                        <input 
                            type="password" 
                           // placeholder="TC Kimlik" 
                            value={tcKimlik} 
                            onChange={(e) => setTcKimlik(e.target.value)}
                            required 
                        />
                        <i>TC Kimlik Numarası</i>
                    </div>
                    <div className="inputbox">
                        <input type="submit" value="login"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GirisFormu;