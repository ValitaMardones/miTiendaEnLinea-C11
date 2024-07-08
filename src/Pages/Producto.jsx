import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../components/assets/all_product";
import { Container, Grid, Typography, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import clp from "../components/PesosChilenos.jsx";

//Hooks
//useState = Cambia y/o define el estado de una constante
//useParams = Lo proveer react-router-dom y obtiene informacion de un objeto
//useEffect = Cambia el query de la url

function Producto({ setCarrito, carrito }) {
  const [producto, setProducto] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const datos = data.find((prod) => prod.id == id); //El valor de la url me lo trae como string, por lo tanto no podemos hacer una comparacion estricta
    setProducto(datos);
  }, []); //Al tener la depencia vacia, indica que se renderizara una vez el useEffect. Si no fuera asi, se actualizaria cada vez que el usuario interactuara con la app web

  const generarPedido = (producto) => {
    const [primera, segunda, tercera] = producto.nombre.split(" ", 3); //Estamos abstrayendo el dato desde un array
    const cod = `${primera[0]}-${segunda[0]}-${tercera[0]}-id-${producto.id}`;
    console.log(cod);

    producto["codigo"] = cod;
    producto["cantidad"] = 1;
    const nuevoArray = [...carrito, producto];
    /* carrit.push(producto) */
    setCarrito(nuevoArray);
  };

  return (
    <>
      {producto && ( //Si es que producto existe, renderizame el codigo
        <Container>
          <Grid container sx={{ mt: "40px" }}>
            <Grid item xs={12} sm={6} sx={{ margin: "auto" }}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ padding: "15px", margin: "auto" }}>
              <Typography variant="h5">
                <b>Detalle: </b>
                {producto.nombre}
              </Typography>
              <Typography variant="h5" sx={{ mt: "30px" }}>
                <b>Categoría: </b>
                {producto.categoria}
              </Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ mt: "30px" }}
              >
                <b>Precio: </b>
                {clp(producto.precio_anterior)}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                <b>Descuento: </b>
                {clp(producto.precio_anterior - producto.nuevo_precio)}
              </Typography>
              <Typography variant="h6" sx={{ mt: "30px", textAlign: "right" }}>
                <b>Precio final: </b>
                {clp(producto.nuevo_precio)}
              </Typography>
              <div style={{ textAlign: "right", marginTop: "15px" }}>
                <Button
                  color="error"
                  variant="outlined"
                  endIcon={<AddShoppingCartIcon />}
                  onClick={() => generarPedido(producto)}
                >
                  Agregar al carro
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Producto;
