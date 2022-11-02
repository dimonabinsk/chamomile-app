import React from "react";
import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";

const NavList = () => {
  const linkList = [
    {
      id: 1,
      name: "Каталог цветов",
      path: "/catalog",
    },
    {
      id: 2,
      name: "Аксессуары",
      path: "/accessories",
    },
    {
      id: 3,
      name: "Уход за растениями",
      path: "/plantcare",
    },
    {
      id: 4,
      name: "Блог",
      path: "/blog",
    },
  ];
  const classes =
    "flex items-center border-b-2 border-b-transparent text-green-900 transition-all hover:border-b-green-600 hover:text-green-600  dark:text-green-600 dark:hover:border-b-green-300 dark:hover:text-green-300";

  const activeClasses =
    "text-green-600  dark:text-green-100 border-b-green-100 border-b-2";


  return (
    <ul className={"mb-4 mt-2 inline-flex flex-col gap-2 lg:flex lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"}>
      {linkList.map(({ id, name, path }) => (
        <Typography
          key={id}
          as="li"
          variant="small"
          className={" py-1 font-bk-bt tracking-wider "}
        >
          <NavLink
            to={path}
            className={classes}
            activeClassName={activeClasses}
          >
            {name}
          </NavLink>
        </Typography>
      ))}
    </ul>
  );
};
//
NavList.propTypes = {};

export default NavList;
