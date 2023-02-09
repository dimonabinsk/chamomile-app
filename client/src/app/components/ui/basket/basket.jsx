import { useSelector } from "react-redux";
import { getBasketById, getBasketLoadingStatus } from "../../../store/basket";
import { getCurrentUserId } from "../../../store/users";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Basket = () => {
  const currentUserId = useSelector(getCurrentUserId());
  const basketById = useSelector(getBasketById(currentUserId));
  const [quantity, setQuantity] = useState(0);
  const isLoadingBasketStatus = useSelector(getBasketLoadingStatus());

  //   console.log(currentUserId);
  if (basketById) {
    console.log(basketById.basket);
  }
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
          className="flex flex-col bg-transparent flex-nowrap font-bk-rt text-green-4 dark:text-green-1"
        >
          <FontAwesomeIcon icon={faBagShopping} size="xl" />
          <span className="ml-2 text-green-4 dark:text-green-2">
            {quantity}
          </span>
        </IconButton>
      </MenuHandler>
      <MenuList>
        {isLoadingBasketStatus ? (
          <MenuItem>Тут пока пусто</MenuItem>
        ) : (
          basketById.basket.map((b, i) => (
            <MenuItem key={i}>{`${b.productId} кол:${b.quantity} Ц:${b.totalPrice}`}</MenuItem>
          ))
        )}
      </MenuList>
    </Menu>
  );
};
export default Basket;
