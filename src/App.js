import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SatınAl from "./components/SatınAl";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={SatınAl} path="/satinal" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
