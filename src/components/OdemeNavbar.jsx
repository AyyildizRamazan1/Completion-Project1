// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './OdemeNavbar.css'; // Stil dosyasını import etme yeri

const OdemeNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/payment">Ödeme Sayfası</Link>
        </li>
        <li>
          <Link to="/register">Kayıt Ol</Link>
        </li>
        <li>
          <Link to="/cart">Sepetteki Ürünler</Link>
        </li>
      </ul>
    </nav>
  );
};

export default OdemeNavbar;
