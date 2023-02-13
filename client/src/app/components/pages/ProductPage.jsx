import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Button, Typography } from "@material-tailwind/react";

import { getBasket, getBasketLoadingStatus } from "../../store/basket";
import { getCatalogLoadingStatus, getProductById } from "../../store/catalog";
import { SpinnerLoader } from "../ui/spinnerLoader";
import { getDataStatus } from "../../store/users";
import { useActionsBasket } from "../../hooks";

const ProductPage = () => {
  const { plantId } = useParams();
  const history = useHistory();
  // const dispatch = useDispatch();
  const isLoadingBasket = useSelector(getBasketLoadingStatus());
  const currentProduct = useSelector(getProductById(plantId));
  const isLoadingProductStatus = useSelector(getCatalogLoadingStatus());
  const userBasket = useSelector(getBasket());
  const userDataLoadStatus = useSelector(getDataStatus());
  const { addToBasket } = useActionsBasket(plantId);

  if (isLoadingProductStatus && isLoadingProductStatus && userBasket)
    return <SpinnerLoader />;

  // console.log("currentProduct", currentProduct);

  // function handleAddBasket() {
  // if (!isLoadingProductStatus && !isLoadingBasket && userBasket) {
  //   if (userBasket.basket.productId) {
  //     const basket = {
  //       ...userBasket,
  //       totalPrice: currentProduct.price,
  //       totalQuantity: 1,
  //       basket: {
  //         [plantId]: {
  //           name: currentProduct.name,
  //           img: currentProduct.images[0],
  //           quantity: 1,
  //           price: currentProduct.price,
  //           totalPrice: currentProduct.price,
  //         },
  //       },
  //     };
  //     dispatch(addBasket(basket));
  //   }
  //   if (userBasket.basket[plantId]) {
  //     const key = userBasket.basket[plantId];
  //     const price = userBasket.totalPrice;
  //     const quantity = userBasket.totalQuantity;
  //     const basket = {
  //       ...userBasket,
  //       totalPrice: price + currentProduct.price,
  //       totalQuantity: quantity + 1,
  //       basket: {
  //         ...userBasket.basket,
  //         [plantId]: {
  //           ...key,
  //           quantity: key.quantity + 1,
  //           totalPrice: key.totalPrice + currentProduct.price,
  //         },
  //       },
  //     };
  //     console.log("basket update");
  //     dispatch(updateBasket(basket));
  //   }
  //   if (!userBasket.basket[plantId]) {
  //     const price = userBasket.totalPrice;
  //     const quantity = userBasket.totalQuantity;
  //     const basket = {
  //       ...userBasket,
  //       totalPrice: price + currentProduct.price,
  //       totalQuantity: quantity + 1,
  //       basket: {
  //         ...userBasket.basket,
  //         [plantId]: {
  //           name: currentProduct.name,
  //           img: currentProduct.images[0],
  //           quantity: 1,
  //           price: currentProduct.price,
  //           totalPrice: currentProduct.price,
  //         },
  //       },
  //     };
  //     console.log("basket new product add");
  //     dispatch(updateBasket(basket));
  //   }
  // }
  // }

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
      <Button
        color="green"
        onClick={() =>
          addToBasket(
            userBasket[0],
            isLoadingProductStatus,
            isLoadingBasket,
            currentProduct,
            plantId
          )
        }
      >
        Добавить в корзину
      </Button>
      <Button
        color="green"
        onClick={() =>
          userDataLoadStatus ? history.push("/basket") : history.push("/login")
        }
      >
        Перейти в корзину
      </Button>
    </div>
  );
};

export default ProductPage;
