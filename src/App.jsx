import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import NavBar from "./components/NavBar/NavBar";
import Tienda from "./Pages/Tienda";
import Mujer from "./Pages/Mujer";
import Nino from "./Pages/Nino";
import Hombre from "./Pages/Hombre";
import Producto from "./Pages/Producto";

export const CarritoContext = createContext();

function App() {
  const [carrito, setCarrito] = useState([]);
  return (
    <>
      <CarritoContext.Provider value={carrito}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Tienda />} />
          <Route path="/mujer" element={<Mujer />} />
          <Route path="/hombre" element={<Hombre />} />
          <Route path="/nino" element={<Nino />} />
          <Route
            path="/producto/:id"
            element={<Producto carrito={carrito} setCarrito={setCarrito} />}
          />
        </Routes>
      </CarritoContext.Provider>
    </>
  );
}

export default App;
