import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import SocialNetwork from "../socialNetwork/socialNetwork";

// import PropTypes from "prop-types";

const Banner = () => {
  return (
    <Typography
      as="section"
      className="relative top-16 left-0 right-0 z-10 max-w-screen-3xl px-4 sm:px-5 lg:top-52"
    >
      <Typography variant="h2" className="sr-only" aria-label="Баннер">
        Баннер
      </Typography>
      <Typography
        as="div"
        className={`banner-img bg-banner absolute top-[200px] right-0 h-[80vw] w-[80vw] rounded-lg sm:top-0 sm:right-auto sm:left-[20vw] sm:h-[50vw] sm:w-[70vw] lg:h-[40vw] `}
      ></Typography>
      <Typography as="div" className="relative max-w-lg sm:top-[15vw]">
        <Typography
          variant="h3"
          className={`banner-title absolute whitespace-nowrap font-md-bt dark:text-main-white dark:mix-blend-difference sm:top-[-3vw]`}
        >
          Комнатные растения
        </Typography>
        <Typography
          as="span"
          className="banner-txt  top-[10vw] left-[30vw] text-green-1 sm:top-[3vw] sm:left-[20vw]"
        >
          с любовью...
        </Typography>
        <Typography className="absolute top-[20vw] font-bk-rt leading-[24px] dark:text-main-white dark:mix-blend-difference sm:top-[15vw] lg:top-40">
          Мы поможем вам подобрать лучшие растения для вашего помещения,
          оранжереи и сада, доставим их к вашей двери и поможем ухаживать за
          ними.
        </Typography>
        <Typography as="div">
          <Typography
            as={Link}
            to="/catalog"
            className="absolute top-56 m-0 rounded-lg border-2 border-green-1 bg-main-white py-2 px-5 font-bk-rt text-main-black transition hover:bg-green-1 hover:text-main-white focus:bg-green-1 focus:text-main-white focus:outline-none sm:top-64 sm:py-3 sm:px-8"
            role="button"
          >
            Просмотреть каталог
          </Typography>
        </Typography>
      </Typography>

      <SocialNetwork styles="absolute top-[290px] left-[-5px] sm:left-auto sm:top-[15vw] sm:right-5" />
    </Typography>
  );
};

// Banner.propTypes = {};

export default Banner;
