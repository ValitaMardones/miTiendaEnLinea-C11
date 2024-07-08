function PesosChilenos(number) {
  const formattedNumber = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimunFractionDigits: 0,
  }).format(number);
  return formattedNumber;
}

export default PesosChilenos;
