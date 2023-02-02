import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";

import { GetCard, Loader, Pagination } from "../common";
import { Button, Typography } from "@material-tailwind/react";
import { useCatalog } from "../../hooks/useCatalog";

const CatalogPage = () => {
  const [isSelectedGroup, setSelectedGroup] = useState("");
  const [isSelectedMethod, setSelectedMethod] = useState("");

  const { catalog } = useCatalog();

  const PageSize = 8;
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
  }, [isSelectedGroup, isSelectedMethod]);

  if (catalog.length) {
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

    // console.log(filterMethod);

    const count = filterMethod.length;
    const catalogGroup = filterMethod.slice(firstPageIndex, lastPageIndex);
    return (
      catalogGroup && (
        <>
          {" "}
          <Typography as="section" className=" mt-32 mb-10 px-4 lg:px-8">
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
            <Typography
              as="div"
              className=" grid  w-full grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 lg:gap-4"
            >
              {catalogGroup.map((item) => {
                // console.log(item);
                return (
                  <Typography
                    as="div"
                    key={item._id}
                    className="my-8"
                  >
                    <GetCard
                      path={`/catalog/${item._id}`}
                      src={`${item.images}`}
                      alt={item.name}
                      price={item.price}
                      title={item.name}
                    />
                  </Typography>
                );
              })}
            </Typography>
          </Typography>
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
    return <Loader />;
  }
};

// CatalogPage.propTypes = {
//   id: PropTypes.string,
// };

export default CatalogPage;
