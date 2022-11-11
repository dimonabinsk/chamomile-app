import React from "react";
import PropTypes from "prop-types";
import { Banner, Link } from "../ui/home";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Link />
    </>
  );
};

HomePage.propTypes = {
  fixed: PropTypes.bool,
};

export default HomePage;
