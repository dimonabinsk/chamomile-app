import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

import InputTextField from "../../common/form/sharedForm/inputTextField";
import { ControlledFormSchema } from "../../../utilities/controlledFormSchema";

import PropTypes from "prop-types";

const RegisterForm = ({ onToggleForm }) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ControlledFormSchema),
  });

  // Отправка формы
  const onFormSubmit = (formData) => {
    const { login, password, email } = formData;
    console.log(formData);
    console.log(`Логин: ${login}, Пароль: ${password}, Почта: ${email}`);
    reset();
  };

  return (
    <>
      <div className=" absolute w-full sm:w-3/4 lg:w-1/2">
        <Typography
          variant="h3"
          className="mb-3 text-center font-bk-rt text-xl tracking-widest text-graphite dark:text-gray-100"
        >
          Регистрация
        </Typography>
        <div className={" rounded-lg bg-white p-6 shadow-lg dark:bg-gray-300"}>
          <form action="" onSubmit={handleSubmit(onFormSubmit)}>
            <div className={"mb-6"}>
              <InputTextField
                title="Логин..."
                control={control}
                name="login"
                type="text"
              />
            </div>
            <div className={"mb-6"}>
              <InputTextField
                title="Электронная почта..."
                control={control}
                name="email"
                type="text"
              />
            </div>
            <div className={"mb-6"}>
              <InputTextField
                title="Пароль..."
                control={control}
                name="password"
                type="password"
              />
            </div>
            <div>
              <Button
                type="submit"
                color="green"
                className={"mb-6 bg-green-600"}
                variant="gradient"
                disabled={!isValid}
              >
                Отправить
              </Button>
            </div>
            <div>
              <i className=" font-bk-rt">
                У вас уже есть учетная запись?{" "}
                <Link
                  to={"/user/register"}
                  role={"button"}
                  onClick={onToggleForm}
                  className={
                    " border-b-2 border-b-transparent text-green-600 hover:border-b-green-300 hover:text-green-300"
                  }
                >
                  Войти
                </Link>
              </i>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

RegisterForm.propTypes = {
  onToggleForm: PropTypes.func.isRequired,
};

export default RegisterForm;
