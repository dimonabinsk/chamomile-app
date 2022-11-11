import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { LoginForm, RegisterForm } from "../components/ui/userForm";
import Link from "../components/ui/home/link/link";

const User = ({ fixed }) => {
  const { type } = useParams();
  const history = useHistory();
  const [typeForm, setTypeForm] = useState(
    type === "login" ? type : "register"
  );
  useEffect(() => {
    history.push(`/user/${typeForm}`);
  }, [history, typeForm]);

  const toggleFormType = () => {
    setTypeForm((prev) => (prev === "register" ? "login" : "register"));
  };
  return (
    <>
      <div className="relative top-[63px] mx-4 flex flex-col items-center lg:top-[100px] lg:mx-8">
        {typeForm === "login" ? (
          <>
            <LoginForm onToggleForm={toggleFormType} />
          </>
        ) : (
          <>
            <RegisterForm onToggleForm={toggleFormType} />
          </>
        )}
        <Link />
      </div>
    </>
  );
};

User.propTypes = {
  fixed: PropTypes.bool,
};

export default User;
