import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ChangeThemeBtn = ({onChangeTheme, darkMode, classes}) => {
    return (
        <IconButton
          variant="text"
          className={classes}
          onClick={onChangeTheme}
        >
          {darkMode ? (
            <FontAwesomeIcon color="#ffffff" size="2xl" icon={faMoon} />
          ) : (
            <FontAwesomeIcon color="#ff8c00" size="2xl" icon={faSun} />
          )}
        </IconButton>
    );
};

ChangeThemeBtn.propTypes = {
    onChangeTheme:PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
    classes:PropTypes.string.isRequired
};

export default ChangeThemeBtn;
