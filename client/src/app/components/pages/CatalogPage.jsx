import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import config from "../../../config.json";
// import PropTypes from "prop-types";
import { SpinnerLoader } from "../ui/spinnerLoader";
import { ProductCard, Pagination } from "../common";
import { Button, Typography } from "@material-tailwind/react";
import { getCatalog } from "../../store/catalog";

const pathBase = config.API_BASE_URL;

const CatalogPage = () => {
  const [isSelectedGroup, setSelectedGroup] = useState("");
  const [isSelectedMethod, setSelectedMethod] = useState("");

  const catalog = useSelector(getCatalog());

  const PageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSelectedGroup = (value) => {
    setSelectedGroup(value);
  };

  const handleSelectedMethod = (value) => {
    setSelectedMethod(value);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [isSelectedGroup, isSelectedMethod, catalog]);

  if (catalog) {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    const filterGroup = isSelectedGroup
      ? catalog.filter((item) => {
          return item.group === isSelectedGroup;
        })
      : catalog;

    const filterMethod = isSelectedMethod
      ? filterGroup.filter((item) => {
          return (
            item.method.find((elem) => elem === isSelectedMethod) ===
            isSelectedMethod
          );
        })
      : filterGroup;

    const count = filterMethod.length;
    const catalogGroup = filterMethod.slice(firstPageIndex, lastPageIndex);
    return (
      catalogGroup && (
        <>
          {" "}
          <section className="mt-32 mb-10 px-4 lg:px-8">
            <Typography
              variant="h2"
              className=" font-bk-bt text-graphite dark:text-main-white"
            >
              Цветы
            </Typography>
            <Button onClick={() => handleSelectedGroup("Красивоцветущие")}>
              Фильтр по группам растений
            </Button>{" "}
            <Button onClick={() => handleSelectedMethod("Оранжерея")}>
              Фильтр по методу выращивания
            </Button>
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 lg:gap-4">
              {catalogGroup.map((item) => {
                return (
                  <div key={item._id} className="my-8">
                    <ProductCard
                      path={`/catalog/${item._id}`}
                      src={pathBase + item.imgMain}
                      alt={item.name}
                      price={item.price}
                      title={item.name}
                      description={item.descr.p}
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
      )
    );
  } else {
    return <SpinnerLoader />;
  }
};

// CatalogPage.propTypes = {
//   id: PropTypes.string,
// };

export default CatalogPage;
