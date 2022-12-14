/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { toast } from "react-toastify";
import { Loader } from "../components/common";
import catalogServices from "../services/catalog.services";

const CatalogContext = React.createContext();

export const useCatalog = () => {
  return useContext(CatalogContext);
};

const CatalogProvider = ({ children }) => {
  const [catalog, setCatalog] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCatalog();
  }, []);

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  async function getCatalog() {
    try {
      const { content } = await catalogServices.get();
      setCatalog(content);
      setLoading(false);
    } catch (e) {
      errorCather(e);
    }
  }

  function errorCather(error) {
    const { message } = error.response.data;
    setError(message);
  }


  return (
    <CatalogContext.Provider value={{catalog}}>
        {!isLoading ? children : <Loader/>}
    </CatalogContext.Provider>
  );
};

CatalogProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CatalogProvider;