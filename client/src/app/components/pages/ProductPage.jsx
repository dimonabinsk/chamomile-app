import React from "react";
import { useSelector } from "react-redux";
import { getProductById } from "../../store/catalog";

const ProductPage = ({ plantId }) => {

  const productItem = useSelector(getProductById(plantId));
  console.log(productItem.idAt);
  return <div>ProductPage</div>;
};

export default ProductPage;
