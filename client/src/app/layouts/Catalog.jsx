import React from "react";
import { useParams } from "react-router-dom";
import { CatalogPage, ProductPage } from "../components/pages";
// import PropTypes from "prop-types";

const Catalog = () => {
  const { plantId } = useParams();
  return plantId ? <ProductPage plantId={plantId} /> : <CatalogPage />;
};

// Catalog.propTypes = {};

export default Catalog;
