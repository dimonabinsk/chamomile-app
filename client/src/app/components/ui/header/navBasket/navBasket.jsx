// import { useEffect, useState } from "react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getBasket, getBasketLoadingStatus } from "../../../../store/basket";
import { useEffect } from "react";

const NavBasket = ({ isLoggedIn }) => {
  const userBasket = useSelector(getBasket());
  const isLoadingBasket = useSelector(getBasketLoadingStatus());

  useEffect(() => {
    console.log(userBasket);
  }, [userBasket]);

  if (!isLoadingBasket) {
    if (!isLoggedIn) {
      return (
        <Menu
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
          <MenuHandler>
            <IconButton
              size="sm"
              className="flex flex-col bg-transparent font-bk-rt text-green-4 dark:text-green-1"
            >
              <FontAwesomeIcon icon={faBagShopping} size="xl" />
              <span className="px-1 bg-white rounded text-green-4 dark:text-green-2">
                0
              </span>
            </IconButton>
          </MenuHandler>
          <MenuList>
            <MenuItem>Тут пока пусто</MenuItem>
          </MenuList>
        </Menu>
      );
    } else {
      const basket = Object.values(userBasket[0].basket);

      return (
        <Menu
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
          <MenuHandler>
            <IconButton
              size="sm"
              className="flex flex-col bg-transparent font-bk-rt text-green-4 dark:text-green-1"
            >
              <FontAwesomeIcon icon={faBagShopping} size="xl" />
              <span className="px-1 bg-white rounded text-green-4 dark:text-green-2">
                {userBasket[0].totalQuantity}
              </span>
            </IconButton>
          </MenuHandler>
          <MenuList className="max-h-[50vh]">
            {basket.map(({ name, img, quantity, totalPrice }, i) => (
              <MenuItem key={i + name} className="">
                <Avatar src={img} alt="avatar" size="xs" className="mr-2" />
                <Typography variant="h6" className="mt-0 font-bk-rt">
                  {name}
                </Typography>

                <Typography className="p-0 mt-0 font-bk-rt">
                  кол: {quantity}
                </Typography>

                <Typography className="p-0 mt-0 font-bk-rt">
                  Цена: {totalPrice} руб.
                </Typography>
              </MenuItem>
            ))}
            <MenuItem>
              <Typography className="cursor-default">
                Общая цена: {userBasket[0].totalPrice} руб.
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      );
    }
  }
};
export default NavBasket;
