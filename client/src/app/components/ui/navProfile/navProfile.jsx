import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
} from "@material-tailwind/react";

import { getCurrentUserData } from "../../../store/users";
import { Loader } from "../../common";
// import { createBasket } from "../../../store/basket";

const NavProfile = () => {
  const currentUser = useSelector(getCurrentUserData());
  // console.log(currentUser);
  // const dispatch = useDispatch();

// if (currentUser) {
//   const initBasket = (id) => {
//     return {
//       userId: id,
//       basket: [
//         {
//           productId: null,
//           quantity: 0,
//           price: 0,
//           totalPrice: 0,
//         },
//       ],
//     };
//   };
//   dispatch(createBasket(initBasket(currentUser._id)));
// }
  return !currentUser ? (
    <Loader />
  ) : (
    <>
      <Menu
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <IconButton size="sm" className="p-0 mr-2 bg-transparent">
            <Avatar src={currentUser.image} variant="rounded" size="xs" />
          </IconButton>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link to={`/user/${currentUser._id}`}>{currentUser.login}</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/logout">Выйти</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default NavProfile;
