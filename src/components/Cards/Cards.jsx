import {
  Container,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

//Sx se usa para dar style, con esta propiedad lo va a renderizar como css
//mt = marginTop
//mb = marginBottom
//my = marginEjeY
//item = {true} === item
//xs=xtra-small | sm = small | md=medium | lg=largeCuando | cuando la vista tenga el tamaño indicado, le indico cuantos espacios quiero que ocupe mi grilla
//cardMedia nos permite agregar una imagen dentro de la tarjeta, el componente puede ser un video, imagen, gif
function Cards({ data, titulo }) {
  const producto = data; //=>[{id, nombre, imagen, nuevo_precio, precio_anterior}]
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
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
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
                    {producto.precio_anterior}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "right",
                      width: "50%",
                    }}
                  >
                    {producto.nuevo_precio}
                  </Typography>
                </CardActions>
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
