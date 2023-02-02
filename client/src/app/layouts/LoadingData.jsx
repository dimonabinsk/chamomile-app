import { Button, Progress, Typography } from "@material-tailwind/react";
import React from "react";
// import PropTypes from "prop-types";
import useMockData from "../components/ui/mockData/mockData";

const LoadingData = () => {
  const { error, initialize, progress, status } = useMockData();
  const handleClick = () => {
    initialize();
  };
  return (
    <>
      <Typography as="div" className="relative top-12 container">
        <Typography
          className=" text-main-black dark:text-main-white"
          variant="h3"
        >
          Инициализация данных FireBase
        </Typography>
        <Progress value={progress} label={progress < 100 ? "Загрузка" : "Ок"} className="h-8" />
        <Typography className=" text-main-black dark:text-main-white">
          Статус: {status}
        </Typography>
        {error && (
          <Typography className=" text-main-black dark:text-main-white">
            Ошибка: {error}
          </Typography>
        )}
        <Button
          variant="gradient"
          size="md"
          color="green"
          onClick={handleClick}
        >
          Инициализировать
        </Button>
      </Typography>
    </>
  );
};

// LoadingData.propTypes = {};

export default LoadingData;
