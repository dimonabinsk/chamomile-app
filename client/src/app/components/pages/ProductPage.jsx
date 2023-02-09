import { Button, Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createBasket, getBasketById, updateBasket } from "../../store/basket";
import { getProductById } from "../../store/catalog";
import { getCurrentUserId } from "../../store/users";

const ProductPage = () => {
  const { plantId } = useParams();

  const dispatch = useDispatch();
  const currentProduct = useSelector(getProductById(plantId));
  const currentUserId = useSelector(getCurrentUserId());
  const basketById = useSelector(getBasketById(currentUserId));
  // const currentBasket = useSelector(getBasket());

  useEffect(() => {
    console.log(plantId);
  }, [plantId]);

  // console.log("currentProduct", currentProduct);
  // console.log("basketById", basketById);
  function updateDataBasket(data, prodId, currProd) {
    const newBasket = data.basket.map((b) => {
      if (b.productId === prodId) {
        return {
          ...b,
          totalPrice: b.totalPrice + currProd.price,
          quantity: b.quantity + 1,
        };
      }
      return b;
    });

    return { ...data, basket: newBasket };
  }
  const handleClick = () => {
    if (!basketById) {
      dispatch(
        createBasket({
          userId: currentUserId,
          basket: [
            {
              productId: plantId,
              quantity: 1,
              price: currentProduct.price,
              totalPrice: currentProduct.price,
            },
          ],
        })
      );
    } else {
      const newBasket = updateDataBasket(basketById, plantId, currentProduct);
      console.log("newBasket", newBasket);
      dispatch(updateBasket(newBasket));
    }
  };

  return (
    <div className="mt-12 ">
      <Typography variant="h3">ProductPage</Typography>
      <Button color="green" onClick={handleClick}>
        Добавить в корзину
      </Button>
    </div>
  );
};

export default ProductPage;
