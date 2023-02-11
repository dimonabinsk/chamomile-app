import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoggedIn,
  getUsersLoadingStatus,
  loadUsersList,
} from "../../../store/users";
import { loadCatalogList } from "../../../store/catalog";
import { Loader } from "../../common";
import { loadBasketList } from "../../../store/basket";
import localStorageService from "../../../services/localStorage.service";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  const usersStatusLoading = useSelector(getUsersLoadingStatus());
  const userId = localStorageService.getUserId();

  useEffect(() => {
    dispatch(loadCatalogList());
    if (isLoggedIn) {
      dispatch(loadUsersList());
      if (userId) {
        dispatch(loadBasketList(userId));
      }
    }
  }, [dispatch, isLoggedIn, userId]);

  return usersStatusLoading ? <Loader /> : children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default AppLoader;
