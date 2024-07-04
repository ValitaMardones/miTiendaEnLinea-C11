import Hero from "../components/Hero/Hero";
import tendencias from "../components/assets/data";
import Cards from "../components/Cards/Cards";
import nuevaColeccion from "../components/assets/new_collections";

function Tienda() {
  return (
    <>
      <Hero />
      <Cards data={tendencias} titulo="Tendencias" />
      <Cards data={nuevaColeccion} titulo="Nueva Coleccion" />
    </>
  );
}

export default Tienda;
