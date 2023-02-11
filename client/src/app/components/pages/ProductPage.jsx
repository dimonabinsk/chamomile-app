import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Typography } from "@material-tailwind/react";

import {
  addBasket,
  getBasket,
  getBasketLoadingStatus,
  updateBasket,
} from "../../store/basket";
import { getCatalogLoadingStatus, getProductById } from "../../store/catalog";
import { Loader } from "../common";


const ProductPage = () => {
  const { plantId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoadingBasket = useSelector(getBasketLoadingStatus());

  const currentProduct = useSelector(getProductById(plantId));
  const isLoadingProductStatus = useSelector(getCatalogLoadingStatus());
  const userBasket = useSelector(getBasket());

  if (isLoadingProductStatus && isLoadingProductStatus && userBasket)
    return <Loader />;

  // console.log("currentProduct", currentProduct);

  function handleAddBasket(userBasket) {
    if (!isLoadingProductStatus && !isLoadingBasket && userBasket) {
      if (userBasket.basket.productId) {
        const basket = {
          ...userBasket,
          totalPrice: currentProduct.price,
          totalQuantity: 1,
          basket: {
            [plantId]: {
              name: currentProduct.name,
              img: currentProduct.images[0],
              quantity: 1,
              price: currentProduct.price,
              totalPrice: currentProduct.price,
            },
          },
        };

        dispatch(addBasket(basket));
      }
      if (userBasket.basket[plantId]) {
        const key = userBasket.basket[plantId];
        const price = userBasket.totalPrice;
        const quantity = userBasket.totalQuantity;
        const basket = {
          ...userBasket,
          totalPrice: price + currentProduct.price,
          totalQuantity: quantity + 1,
          basket: {
            ...userBasket.basket,
            [plantId]: {
              ...key,
              quantity: key.quantity + 1,
              totalPrice: key.totalPrice + currentProduct.price,
            },
          },
        };
        console.log("basket update");
        dispatch(updateBasket(basket));
      }
      if (!userBasket.basket[plantId]) {
        const price = userBasket.totalPrice;
        const quantity = userBasket.totalQuantity;
        const basket = {
          ...userBasket,
          totalPrice: price + currentProduct.price,
          totalQuantity: quantity + 1,
          basket: {
            ...userBasket.basket,
            [plantId]: {
              name: currentProduct.name,
              img: currentProduct.images[0],
              quantity: 1,
              price: currentProduct.price,
              totalPrice: currentProduct.price,
            },
          },
        };
        console.log("basket new product add");
        dispatch(updateBasket(basket));
      }
    }
  }

  // function handleDeleteBasket(userBasket) {
  //   if (!isLoadingProductStatus && !isLoadingBasket && userBasket) {
  //     if (userBasket.basket[plantId]) {
  //       const key = userBasket.basket[plantId];
  //       const price = userBasket.totalPrice;
  //       const quantity = userBasket.totalQuantity;
  //       const basket = {
  //         ...userBasket,
  //         totalPrice: price - currentProduct.price,
  //         totalQuantity: quantity - 1,
  //         basket: {
  //           ...userBasket.basket,
  //           [plantId]: {
  //             ...key,
  //             quantity: key.quantity - 1,
  //             totalPrice: key.totalPrice - currentProduct.price,
  //           },
  //         },
  //       };
  //       console.log("basket update");
  //       dispatch(updateBasket(basket));
  //     }
  //   }
  // }

  return (
    <div className="mt-12 ">
      <Typography variant="h3" className="dark:text-main-white">
        {currentProduct.name}
      </Typography>
      <Avatar src={currentProduct.images[0]} alt="avatar" size="xxl" />
      <Button color="green" onClick={() => handleAddBasket(userBasket[0])}>
        Добавить в корзину
      </Button>
      <Button color="green" onClick={() => history.push("/basket")}>
        Перейти в корзину
      </Button>
    </div>
  );
};

export default ProductPage;
