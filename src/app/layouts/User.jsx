import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
// import PropTypes from "prop-types";
import { LoginFormCard, RegisterFormCard } from "../components/ui/userForm";
import Link from "../components/ui/home/link/link";

const User = () => {
  const { type } = useParams();
  const history = useHistory();
  const [typeForm, setTypeForm] = useState(
    type === "register" ? type : "login"
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
            <LoginFormCard onToggleForm={toggleFormType} />
          </>
        ) : (
          <>
            <RegisterFormCard onToggleForm={toggleFormType} />
          </>
        )}
        <Link />
      </div>
    </>
  );
};

// User.propTypes = {
//   fixed: PropTypes.bool,
// };

export default User;
