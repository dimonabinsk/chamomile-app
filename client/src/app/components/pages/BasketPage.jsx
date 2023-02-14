import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import { useSelector } from "react-redux";
import { getBasket, getBasketLoadingStatus } from "../../store/basket";
import { SpinnerLoader } from "../ui/spinnerLoader";
import { useActionsBasket } from "../../hooks";
import { getCatalog, getCatalogLoadingStatus } from "../../store/catalog";

const BasketPage = () => {
  const currentBasket = useSelector(getBasket());
  const { addToBasket, deleteToBasket } = useActionsBasket();
  const isLoadingProductStatus = useSelector(getCatalogLoadingStatus());
  const isLoadingBasket = useSelector(getBasketLoadingStatus());
  const catalog = useSelector(getCatalog());

  if (isLoadingProductStatus && isLoadingBasket) {
    return <SpinnerLoader />;
  } else {
    if (catalog) {
      const productBasketKey = Object.keys(currentBasket[0].basket).filter(
        (el) => el !== "product"
      );
      const productBasketValue = Object.values(currentBasket[0].basket).filter(
        (el) => el !== true
      );

      function TableBodyNoItems() {
        return (
          <tr className="border-b bg-gray-300 text-center font-bk-bt">
            <td
              colSpan={"6"}
              className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900"
            >
              Тут пока ничего нет
            </td>
          </tr>
        );
      }

      function TableBody() {
        return productBasketKey.map((prodKey, i) => {
          const currentProduct = catalog.find((c) => c._id === prodKey);
          return (
            <tr
              key={prodKey + i}
              className={` border-b ${
                i % 2 === 0 ? "bg-gray-300" : "bg-main-white"
              } `}
            >
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                {i + 1}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-miama text-lg font-semibold text-graphite">
                <Avatar
                  src={productBasketValue[i].img}
                  alt="avatar"
                  size="lg"
                  className="mr-2"
                />
                {productBasketValue[i].name}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-base font-semibold text-gray-900">
                {productBasketValue[i].price}
              </td>
              <td className="flex justify-center whitespace-nowrap px-6 py-6 text-sm font-light text-gray-900">
                <IconButton
                  color="red"
                  size="sm"
                  onClick={() =>
                    deleteToBasket(
                      currentBasket[0],
                      isLoadingProductStatus,
                      isLoadingBasket,
                      { ...currentProduct },
                      prodKey
                    )
                  }
                >
                  <FontAwesomeIcon icon={faMinus} />
                </IconButton>
                <Typography className="mx-2 pt-1 text-base font-semibold text-gray-900">
                  {productBasketValue[i].quantity}
                </Typography>
                <IconButton
                  color="green"
                  size="sm"
                  onClick={() =>
                    addToBasket(
                      currentBasket[0],
                      isLoadingProductStatus,
                      isLoadingBasket,
                      { ...currentProduct },
                      prodKey
                    )
                  }
                >
                  <FontAwesomeIcon icon={faPlus} />
                </IconButton>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-center text-base font-semibold text-gray-900">
                {productBasketValue[i].totalPrice}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-900">
                <Button color="orange">Удалить</Button>
              </td>
            </tr>
          );
        });
      }
      return (
        <div className="mt-4">
          <Typography
            variant="h4"
            className="text-center font-md-bt dark:text-main-white"
          >
            Корзина
          </Typography>
          <div className="mx-auto mt-4 flex max-w-[90%] flex-col ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full ">
                <div className="overflow-hidden rounded-xl shadow-sm shadow-indigo-300">
                  <table className="min-w-full ">
                    <thead className="border-b bg-white">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                        >
                          Название
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                        >
                          Цена, 1шт, руб.
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-center text-sm font-medium text-gray-900"
                        >
                          Количество
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-center text-sm font-medium text-gray-900"
                        >
                          Цена, всего руб.
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-center text-sm font-medium text-gray-900"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentBasket[0].basket.product === true ? (
                        <TableBody />
                      ) : (
                        <TableBodyNoItems />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default BasketPage;
