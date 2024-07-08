import {
  Container,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

import clp from "../PesosChilenos.jsx";

import { Link } from "react-router-dom"; //Este hook sirve para redireccionar
import { useNavigate } from "react-router-dom";

//Sx se usa para dar style, con esta propiedad lo va a renderizar como css
//mt = marginTop
//mb = marginBottom
//my = marginEjeY
//item = {true} === item
//xs=xtra-small | sm = small | md=medium | lg=largeCuando | cuando la vista tenga el tamaño indicado, le indico cuantos espacios quiero que ocupe mi grilla
//cardMedia nos permite agregar una imagen dentro de la tarjeta, el componente puede ser un video, imagen, gif
function Cards({ data, titulo }) {
  /* 1ra parte de mi codigo = useState() para los manejos de estados*/
  /* 2da parte de mi codigo = constantes y funciones*/
  //Por convencion, siempre se debe colocar handle al elemento que modificaremos(clikearemos)
  const handleDivClick = (key) => {
    navigate(`/producto/${key}`); //Donde selecciono {key} es el valor que vamos a agregar a la url
  };
  /* 3ra parte de mi codig= Hook useEffect */
  const navigate = useNavigate();
  return (
    <>
      <Container sx={{ my: "20px" }}>
        <Typography variant="h1" sx={{ mt: "100px" }}>
          {titulo}
        </Typography>
        <Grid container spacing={2} sx={{ mb: "20px" }}>
          {/* Mapeo */}
          {/* data.map((elemento,index) => ()) */}
          {data.map((producto, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              onClick={() => handleDivClick(producto.id)} //Onclik va dentro del Grid para poder hacer clic en cualquier parte de la tarjeta, ademas dentro del grid container estamos haciendo el mapeo.
            >
              <Card sx={{ cursor: "pointer" }}>
                <CardMedia
                  component="img"
                  alt={producto.nombre}
                  src={producto.imagen}
                />
                <CardContent>
                  <Typography variant="h6">{producto.nombre}</Typography>
                </CardContent>
                <CardActions sx={{ px: "15px" }}>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{
                      textDecoration: "line-through",
                      lineHeight: "35px",
                      width: "50%",
                    }}
                  >
                    {clp(producto.precio_anterior)}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "right",
                      width: "50%",
                    }}
                  >
                    {clp(producto.nuevo_precio)}
                  </Typography>
                </CardActions>
                <Link to={`/producto/${producto.id}`}></Link>
              </Card>
            </Grid>
          ))}
          {/* FinMapeo */}
        </Grid>
      </Container>
    </>
  );
}

export default Cards;
