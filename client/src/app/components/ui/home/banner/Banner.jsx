import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import SocialNetwork from "../socialNetwork/socialNetwork";

// import PropTypes from "prop-types";

const Banner = () => {
  return (
    <>
      <section
        className="relative left-0 right-0 z-10 px-4 top-16 max-w-screen-3xl sm:px-5 lg:top-52"
      >
        <Typography variant="h2" className="sr-only" aria-label="Баннер">
          Баннер
        </Typography>
        <div
          className={`banner-img absolute top-[200px] right-0 h-[80vw] w-[80vw] rounded-lg bg-banner sm:top-0 sm:right-auto sm:left-[20vw] sm:h-[50vw] sm:w-[70vw] lg:h-[40vw]`}
        ></div>
        <div className="relative max-w-lg sm:top-[15vw]">
          <Typography
            variant="h3"
            className={`banner-title absolute whitespace-nowrap font-md-bt dark:text-main-white dark:mix-blend-difference sm:top-[-3vw]`}
          >
            Комнатные растения
          </Typography>
          <span
            className="banner-txt  top-[10vw] left-[30vw] text-green-1 sm:top-[3vw] sm:left-[20vw]"
          >
            с любовью...
          </span>
          <Typography className="absolute top-[20vw] font-bk-rt leading-[24px] dark:text-main-white dark:mix-blend-difference sm:top-[15vw] lg:top-40">
            Мы поможем вам подобрать лучшие растения для вашего помещения,
            оранжереи и сада, доставим их к вашей двери и поможем ухаживать за
            ними.
          </Typography>
          <div>
            <Link
              to="/catalog"
              className="absolute px-5 py-2 m-0 transition border-2 rounded-lg top-56 border-green-1 bg-main-white font-bk-rt text-main-black hover:bg-green-1 hover:text-main-white focus:bg-green-1 focus:text-main-white focus:outline-none sm:top-64 sm:py-3 sm:px-8"
              role="button"
            >
              Просмотреть каталог
            </Link>
          </div>
        </div>

        <SocialNetwork styles="absolute top-[290px] left-[-5px] sm:left-auto sm:top-[15vw] sm:right-5" />
      </section>
    </>
  );
};

// Banner.propTypes = {};

export default Banner;
