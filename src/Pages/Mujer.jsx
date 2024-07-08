import banner_mujer from "../components/assets/banner_women.png";
import data from "../components/assets/all_product";
import Cards from "../components/Cards/Cards";

function Mujer() {
  const filterData = data.filter(
    (producto) => producto.id >= 1 && producto.id <= 12
  );
  return (
    <>
      <div className="banner_mujer">
        <img src={banner_mujer} alt="banner_mujer" style={{ width: "100%" }} />
      </div>
      <Cards data={filterData} titulo="Mujer" />
    </>
  );
}

export default Mujer;
