import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";

//div.nav-login-cart>buttom = Acceso rapido de Emmet para crear el div con className AUTOMATICO y un button dentro

function NavBar() {
  /* HOOK  useState
  const [NombreVar, function modificadoraDeVariable) = useState(valor inicial variable)] 
  La convencion es que la funcion modificadora de varible se le anteponga un set. + nombre de la variable, todo junto y usando camelCase*/
  const [menu, setMenu] = useState("tienda");
  {
    /* tienda como parametro de useState es el valor inicial que tendra la pagina web cuando ingresemos a ella */
  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>MiTiendaEnLinea</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("tienda")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Tienda
            {/* Sintaxis
          Operador ternario:   evaluador ? si cumple la condicion : si no cumple 
          Operador AND:  evaluador && si cumple la condicion (si no cumple lo evalua como NULL)*/}
            {menu === "tienda" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("hombre")}>
          <Link to="/hombre" style={{ textDecoration: "none" }}>
            Hombre {menu === "hombre" && <hr />}
          </Link>
        </li>
        <li onClick={() => setMenu("mujer")}>
          <Link to="/mujer" style={{ textDecoration: "none" }}>
            Mujer {menu === "mujer" && <hr />}
          </Link>
        </li>
        <li onClick={() => setMenu("niños")}>
          <Link to="/nino" style={{ textDecoration: "none" }}>
            Niños {menu === "niños" && <hr />}
          </Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        {/* <img src={cart_icon} alt="carrito" /> */}
      </div>
      <Drawer />
    </div>
  );
}

export default NavBar;
