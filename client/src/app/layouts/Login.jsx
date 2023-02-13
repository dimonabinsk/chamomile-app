import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
// import PropTypes from "prop-types";
import { LoginForm, RegisterForm } from "../components/ui/form";

const Login = () => {
  const { type } = useParams();
  const history = useHistory();
  const [typeForm, setTypeForm] = useState(
    type === "register" ? type : "login"
  );


  useEffect(() => {
    history.push(`/login/${typeForm}`);
  }, [history, typeForm]);

  const toggleFormType = () => {
    setTypeForm((prev) => (prev === "register" ? "login" : "register"));
  };
  return (
    <>
      <div className="relative top-[63px] mx-4 flex flex-col items-center lg:top-[100px] lg:mx-8">
        {typeForm === "register" ? (
          <>
            <RegisterForm onToggleForm={toggleFormType} />
          </>
        ) : (
          <>
            <LoginForm onToggleForm={toggleFormType} />
          </>
        )}
      </div>
    </>
  );
};

// User.propTypes = {
//   fixed: PropTypes.bool,
// };

export default Login;
