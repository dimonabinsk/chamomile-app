import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCurrentUserId, getUserById } from "../store/users";
import { UsersLoader } from "../components/ui/hoc";
import { AdminPage } from "../components/pages";

// import PropTypes from "prop-types";

const Admin = (props) => {
  const currentUserId = useSelector(getCurrentUserId());
  const currentUserById = useSelector(getUserById(currentUserId));

  const admin = currentUserById.admin;
  console.log(admin);

  return (
    <UsersLoader>{admin ? <AdminPage /> : <Redirect path="/" />}</UsersLoader>
  );
};

Admin.propTypes = {};

export default Admin;
