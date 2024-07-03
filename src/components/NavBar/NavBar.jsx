import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

//div.nav-login-cart>buttom = Acceso rapido de Emmet para crear el div con className AUTOMATICO y un button dentro

function NavBar() {
  /* HOOK  useState
  const [NombreVar, function modificadoraDeVariable) = useState(valor inicial variable)] 
  La convencion es que la funcion modificadora de varible se le anteponga un set. + nombre de la variable, todo junto y usando camelCase*/
  const [menu, setMenu] = useState("tienda");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>MiTiendaEnLinea</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("tienda")}>
          Tienda
          {/* Sintaxis
          Operador ternario:   evaluador ? si cumple la condicion : si no cumple 
          Operador AND:  evaluador && si cumple la condicion (si no cumple lo evalua como NULL)*/}
          {menu === "tienda" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("hombre")}>
          Hombre {menu === "hombre" && <hr />}
        </li>
        <li onClick={() => setMenu("mujer")}>
          Mujer {menu === "mujer" && <hr />}
        </li>
        <li onClick={() => setMenu("niños")}>
          Niños {menu === "niños" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="carrito" />
      </div>
    </div>
  );
}

export default NavBar;
