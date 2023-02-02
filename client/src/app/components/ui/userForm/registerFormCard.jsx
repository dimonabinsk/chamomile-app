import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import InputTextField from "../../common/form/sharedForm/inputTextField";
import { ControlledFormSchema } from "../../../utilities/controlledFormSchema";

const RegisterFormCard = ({ onToggleForm }) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ControlledFormSchema),
  });

  // console.log(control._formValues);

  // Отправка формы
  const onFormSubmit = (formData) => {
    const { password, email } = formData;
    console.log(formData);
    console.log(`Пароль: ${password}, Почта: ${email}`);
    reset();
  };
  return (
    <Card className="w-full font-bk-bt sm:w-3/4 lg:w-1/2">
      <CardHeader
        variant="gradient"
        className="mb-4 grid h-20 place-items-center bg-green-1"
      >
        <Typography
          variant="h4"
          color="white"
          className="font-bk-bt text-main-white"
        >
          Регистрация
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <form action="" onSubmit={handleSubmit(onFormSubmit)}>
          <InputTextField
            title="Логин..."
            control={control}
            name="login"
            type="text"
          />
          <InputTextField
            title="Электронная почта..."
            control={control}
            name="email"
            type="text"
          />
          <InputTextField
            title="Пароль..."
            control={control}
            name="password"
            type="password"
          />

          <Button
            type="submit"
            color="green"
            className={"mt-6 bg-green-1 font-bk-rt"}
            variant="gradient"
            disabled={!isValid}
            fullWidth
          >
            Отправить
          </Button>
        </form>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography
          variant="small"
          className="mt-6 flex justify-center font-bk-rt text-graphite"
        >
          У вас уже есть учетная запись?{" "}
          <Typography
            as={Link}
            to={"/user/login"}
            variant="small"
            className="ml-1 border-b-2 border-b-transparent font-bk-bt font-bold text-green-4 hover:border-b-green-1 hover:text-green-1"
            onClick={onToggleForm}
          >
            Войти
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
};

RegisterFormCard.propTypes = {
  onToggleForm: PropTypes.func.isRequired,
};

export default RegisterFormCard;
