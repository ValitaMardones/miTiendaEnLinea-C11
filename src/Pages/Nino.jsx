import banner_nino from "../components/assets/banner_kids.png";
import data from "../components/assets/all_product";
import Cards from "../components/Cards/Cards";

function Nino() {
  const filterData = data.filter(
    (producto) => producto.id >= 25 && producto.id <= 36
  );
  return (
    <>
      <div className="banner_nino">
        <img src={banner_nino} alt="banner_nino" style={{ width: "100%" }} />
      </div>
      <Cards data={filterData} titulo="Niños" />
    </>
  );
}

export default Nino;
