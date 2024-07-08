import { Box, Drawer, Divider } from "@mui/material";
import { useContext, useState } from "react";
import { CarritoContext } from "../../App";
import cart_icon from "../assets/cart_icon.png";
import CarritoDeCompra from "../CarritoDeCompra/CarritoDeCompra";

export default function RightDrawer({ children }) {
  const [state, setState] = useState({
    right: false,
  });

  const carrito = useContext(CarritoContext);

  const toggleDrawer = (open) => () => {
    setState({ ["right"]: open });
  };

  const length = () => {
    return carrito.length;
  };

  function obtenerColeccion() {
    return carrito.reduce((accumulator, currentProduct) => {
      //Reduce sirve para contar o manipular datos
      const existingProduct = accumulator.find(
        //El acumulador va a encontrar un elemento
        (p) => p.id === currentProduct.id //Va a recibir un producto
      );

      if (existingProduct) {
        // Si el producto ya existe, suma la cantidad
        existingProduct.cantidad += currentProduct.cantidad;
      } else {
        // Si el producto no existe, agrégalo al array
        accumulator.push({ ...currentProduct });
      }

      return accumulator;
    }, []); //Como es un array, iniciaremos el array vacio
  }

  const list = () => (
    <Box
      sx={{ width: 270 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <CarritoDeCompra data={obtenerColeccion()} titulo="Carrito de compra" />
    </Box>
  );

  return (
    <>
      <div
        style={{ marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
        onClick={toggleDrawer(true)}
      >
        <div className="nav-login-cart">
          <img src={cart_icon} alt="carrito" />
          <div className="nav-cart-count">{length()}</div>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer(false)}
      >
        {list("right")}
      </Drawer>
    </>
  );
}
