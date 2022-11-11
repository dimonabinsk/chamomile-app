import React from "react";
import { Banner } from "../components/ui/home";
import Link from "../components/ui/home/link/link";
import PropTypes from "prop-types";

const Home = () => {
  return (
    <>
      <Banner />
      <Link />
    </>
  );
};

Home.propTypes = {
  fixed: PropTypes.bool,
};

export default Home;
