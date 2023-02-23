import { Typography } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { UserPage } from "../components/pages";

import { UsersLoader } from "../components/ui/hoc";
import { getCurrentUserId, getUserById } from "../store/users";

const User = () => {
  const params = useParams();
  const { userId } = params;
  const currentUserId = useSelector(getCurrentUserId());
  const currentUserById = useSelector(getUserById(currentUserId));

  const adminStatus = currentUserById.admin;

  return (
    <section className=" mt-14">
      <Typography variant="h2" className="hidden">
        Пользователь
      </Typography>
      <UsersLoader>
        {userId === currentUserId ? (
          <UserPage userId={userId} admin={adminStatus} />
        ) : (
          <Redirect to={"/"} />
        )}
      </UsersLoader>
    </section>
  );
};

export default User;
