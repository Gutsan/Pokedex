
import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "./view/Home";
import { Header } from "./Components/Header";
import { useState } from "react";

function App() {
  const[pokemonSelect, setPokemonSelect]=useState("")
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Detalle" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
