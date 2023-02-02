import React from "react";
import PropTypes from "prop-types";
import { Banner, LinkCategory } from "../ui/home";
import GetCardMain from "../common/getCard/getCardMain";

const HomePage = () => {
  return (
    <>
      <Banner />
      <LinkCategory />
      <GetCardMain/>
    </>
  );
};

HomePage.propTypes = {
  fixed: PropTypes.bool,
};

export default HomePage;
