import React from "react";
import { Input } from "@material-tailwind/react";
// import PropTypes from "prop-types";

const Search = () => {
  return (
    <div className=" mb-1">
      <Input variant="outlined" label="Поиск..." color="green" className=" text-graphite dark:text-main-white" />
    </div>
  );
};

// Search.propTypes = {};

export default Search;
