import React from "react";
import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { EditUserPage, UserPage } from "../components/pages";

import { UsersLoader } from "../components/ui/hoc";


import { getCurrentUserId } from "../store/users";
const User = () => {
    const params = useParams();
    const { userId, edit } = params;
    const currentUserId = useSelector(getCurrentUserId());

    return (
        <>
            <UsersLoader>
                {userId ? (
                    edit ? (
                        userId === currentUserId ? (
                            <EditUserPage />
                        ) : (
                            <Redirect to={`/user/${currentUserId}/edit`} />
                        )
                    ) : (
                        <UserPage userId={userId} />
                    )
                ) : (
                    <Redirect to={"/"} />
                )}
            </UsersLoader>
        </>
    );
};

export default User;
