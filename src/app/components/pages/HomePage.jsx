import React from "react";
import PropTypes from "prop-types";
import { Banner, LinkCategory } from "../ui/home";

const HomePage = () => {
  return (
    <>
      <Banner />
      <LinkCategory />
    </>
  );
};

HomePage.propTypes = {
  fixed: PropTypes.bool,
};

export default HomePage;
