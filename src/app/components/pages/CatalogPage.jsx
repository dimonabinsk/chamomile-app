import React, { useState, useEffect, useMemo } from "react";
// import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { GetCard, Loader, Pagination } from "../common";

const CatalogPage = () => {
  const [catalog, setCatalog] = useState([]);
  const [isFetching, setFetching] = useState(true);
  const PageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const count = catalog.length;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    axios
      .get("http://localhost:9000/catalog")
      .then((response) => {
        setCatalog(response.data);
        setFetching(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const catalogCrop = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return catalog.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, catalog]);

  return isFetching ? (
    <Loader />
  ) : (
    <>
      <section className=" mt-32 mb-10 px-4 lg:px-8">
        <h2 className=" sr-only">Цветы</h2>
        <div className=" grid  w-full grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 lg:gap-4">
          {catalogCrop.map((item) => {
            return (
              <div key={item.id} className="my-8">
                <GetCard
                  path={`/catalog/${item.id}`}
                  src={`${item.images[0]}`}
                  alt={item.name}
                  price={item.price}
                  title={item.name}
                />
              </div>
            );
          })}
        </div>
      </section>
      <Pagination
        totalCount={count}
        currentPage={currentPage}
        pageSize={PageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
};

// CatalogPage.propTypes = {
//   id: PropTypes.string,
// };

export default CatalogPage;
