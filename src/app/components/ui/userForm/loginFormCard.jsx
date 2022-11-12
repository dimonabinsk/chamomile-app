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
  Checkbox,
  Button,
} from "@material-tailwind/react";
import InputTextField from "../../common/form/sharedForm/inputTextField";
import { ControlledFormSchema } from "../../../utilities/controlledFormSchema";

const LoginFormCard = ({ onToggleForm }) => {
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
    const { password, email } = formData;
    console.log(formData);
    console.log(`Пароль: ${password}, Почта: ${email}`);
    reset();
  };
  return (
    <Card className="w-full sm:w-3/4 lg:w-1/2 font-bk-bt">
      <CardHeader
        variant="gradient"
        color="green"
        className="mb-4 grid h-20 place-items-center"
      >
        <Typography variant="h4" color="white" className="font-bk-bt">
          Авторизация
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <form action="" onSubmit={handleSubmit(onFormSubmit)}>
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

          <div className="-ml-2.5">
            <Checkbox label="Запомнить меня" />
          </div>
          <Button
            type="submit"
            color="green"
            className={"mt-6 bg-green-600 font-bk-rt"}
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
          className="mt-6 flex justify-center font-bk-rt"
        >
          У вас нет учетной записи?{" "}
          <Typography
            as={Link}
            to={"/user/login"}
            variant="small"
            className="ml-1 border-b-2 border-b-transparent font-bk-bt font-bold text-green-300 hover:border-b-green-600 hover:text-green-600"
            onClick={onToggleForm}
          >
            Регистрация
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
};

LoginFormCard.propTypes = {
  onToggleForm: PropTypes.func.isRequired,
};

export default LoginFormCard;
