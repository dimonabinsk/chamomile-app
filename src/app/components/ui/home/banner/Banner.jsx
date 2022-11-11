import React from "react";
import { Link } from "react-router-dom";
import SocialNetwork from "../socialNetwork/socialNetwork";

// import PropTypes from "prop-types";

const Banner = () => {
  return (
    <section className="relative top-16 lg:top-52 left-0 right-0 z-10 max-w-screen-3xl px-4 sm:px-5">
      <h2 className="sr-only">Баннер</h2>
      <div
        className={`banner-img absolute top-[200px] right-0 h-[80vw] w-[80vw] rounded-lg sm:top-0 sm:right-auto sm:left-[20vw] sm:h-[50vw] sm:w-[70vw] lg:h-[40vw] `}
      ></div>
      <div className="relative max-w-lg sm:top-[15vw]">
        <h3
          className={`banner-title absolute whitespace-nowrap font-md-bt dark:text-white dark:mix-blend-difference sm:top-[-3vw]`}
        >
          Комнатные растения
        </h3>
        <span className="banner-txt  top-[10vw] left-[30vw] text-[#00cc00] sm:top-[3vw] sm:left-[20vw]">
          с любовью...
        </span>
        <p className="absolute top-[20vw] leading-[24px] dark:text-white dark:mix-blend-difference sm:top-[15vw] lg:top-40">
          Мы поможем вам подобрать лучшие растения для вашего помещения,
          оранжереи и сада, доставим их к вашей двери и поможем ухаживать за
          ними.
        </p>
        <div>
          <Link
            to="/catalog"
            className="banner-link absolute top-56 m-0 rounded py-2 px-5 focus:outline-none sm:top-64 sm:py-3 sm:px-8"
            role="button"
          >
            Просмотреть каталог
          </Link>
        </div>
      </div>

      <SocialNetwork styles="absolute top-[290px] left-[-5px] sm:left-auto sm:top-[15vw] sm:right-5" />
    </section>
  );
};

// Banner.propTypes = {};

export default Banner;
