import React from "react";
import NavBar from "./navBar/navBar";
// import PropTypes from "prop-types";

const Header = ({ fixed }) => {
  return (
    <>
      <header
        className={`${
          fixed ? "fixed animate-birth" : "relative "
        } top-2 left-0 right-0 z-50`}
      >
        <NavBar fixed={fixed} />
      </header>
    </>
  );
};

// Header.propTypes = {};

export default Header;
