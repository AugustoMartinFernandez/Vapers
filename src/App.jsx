import React from "react";
import "../src/App.css"; // Aquí puedes agregar estilos propios
import NavBar from "./componentes/NavBar.jsx";
import ItemListContainer from "./componentes/ItemListContainer.jsx";
import HeroSection from "./componentes/HeroSection.jsx";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a Vapeo 3.5!" />
      <HeroSection></HeroSection>
    </div>
  );
}

export default App;
