import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-tailwind/react";

const OpenNavBtn = ({open, onOpen}) => {
    return (
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-graphite dark:text-white-300 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={onOpen}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
    );
};

OpenNavBtn.propTypes = {
    open:PropTypes.bool.isRequired,
    onOpen:PropTypes.func.isRequired
};

export default OpenNavBtn;
