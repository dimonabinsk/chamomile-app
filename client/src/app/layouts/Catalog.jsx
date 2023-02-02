import React from "react";
import { CatalogPage } from "../components/pages";
import CatalogProvider from "../hooks/useCatalog";
// import PropTypes from "prop-types";

const Catalog = () => {
  return (
    <CatalogProvider>
      <CatalogPage />
    </CatalogProvider>
  );
};

// Catalog.propTypes = {};

export default Catalog;
