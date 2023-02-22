import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getCurrentUserId, getUserById } from "../store/users";
import { UsersLoader } from "../components/ui/hoc";
import { AdminPage, CreatedProduct, ProductList } from "../components/pages";

// import PropTypes from "prop-types";

const Admin = (props) => {
  const currentUserId = useSelector(getCurrentUserId());
  const currentUserById = useSelector(getUserById(currentUserId));

  const admin = currentUserById.admin;

  return (
    <UsersLoader>
      {admin ? (
        <>
          <Route path="/admin/upload" component={CreatedProduct} />
          <Route path="/admin/list_product" component={ProductList} />
          <Route path="/admin" exact component={AdminPage} />
        </>
      ) : (
        <Redirect path="/" />
      )}
    </UsersLoader>
  );
};

Admin.propTypes = {};

export default Admin;
