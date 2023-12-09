import React, { useEffect, useState } from 'react'
import './InterCom.css'
import axios from 'axios';


function Modal({ isVisible, onClose, children }) {
    if (!isVisible) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}> 
        <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
          {children}
       </div>
      </div>
    );
  }
  

function InterCom({ isVisible, onClose }) {

    const [Data, setData] = useState({})
    const [path, setPath] = useState("");
    const [baudRate, setBaudRate] = useState("");
    const [isConfigured, setIsConfigured] = useState(false);

    const handleConfigurationSubmit = async () => {
      try {
          await axios.post('http://localhost:4575/configureSerialPort', {
              path: path,
              baudRate: parseInt(baudRate)
          });
          setIsConfigured(true);
      } catch (error) {
          console.error("Konfigürasyon hatası:", error);
      }
  }
    useEffect(() => {
       fetch('http://localhost:4575/greeting')
       .then(res => res.json())
       .then(res => {
        setData(res)
       })
    },[Data])

    return (
        
        <Modal isVisible={isVisible} onClose={onClose} >
          {isConfigured ? (
                Data ? (
                    <div>
                        <div>Voltaj: {Data.voltage}</div>
                        <div>Batary: {Data.batary}</div>
                        <div>Akım: {Data.akim}</div>
                        <div>Capacity: {Data.capacity}</div>
                    </div>
                ) : 'Veri Yok'
            ) : (
                <div>
                    <input 
                        type="text" 
                        placeholder="Path (Örneğin: COM3)" 
                        value={path} 
                        onChange={e => setPath(e.target.value)} 
                    />
                    <input 
                        type="number" 
                        placeholder="BaudRate (Örneğin: 9600)" 
                        value={baudRate} 
                        onChange={e => setBaudRate(e.target.value)} 
                    />
                    <button onClick={handleConfigurationSubmit}>Konfigürasyonu Kaydet</button>
                </div>
            )}
        </Modal>
    )
}

export default InterCom