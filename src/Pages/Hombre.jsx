import banner_hombre from "../components/assets/banner_mens.png";
import data from "../components/assets/all_product";
import Cards from "../components/Cards/Cards";

function Hombre() {
  const filterData = data.filter(
    (producto) => producto.id >= 13 && producto.id <= 24
  );
  return (
    <>
      <div className="banner_hombre">
        <img
          src={banner_hombre}
          alt="banner hombre"
          style={{ width: "100%" }}
        />
      </div>
      <Cards data={filterData} titulo="Hombre" />
    </>
  );
}

export default Hombre;
