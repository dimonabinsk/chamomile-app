import React, { useState } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { IconButton, Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const InputTextField = ({ title, control, name, type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value = "" },
          fieldState: { error },
        }) => (
          <>
            <Input
              className="font-bk-rt text-xl tracking-wider"
              variant="outlined"
              label={title}
              type={showPassword ? "text" : type}
              onChange={onChange}
              value={value}
              id={name}
              name={name}
              color="green"
              icon={
                type === "password" && (
                  <IconButton
                    variant="text"
                    className="relative -top-[10px] -left-2 text-base text-green-600"
                    onClick={toggleShowPassword}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </IconButton>
                )
              }
            />
            <div className=" mt-1 h-6">
              {error && (
                <small id={name} className={`mt-1 block text-xs text-red-800`}>
                  {error?.message}
                </small>
              )}
            </div>
          </>
        )}
      />
    </>
  );
};

InputTextField.propTypes = {
  title: PropTypes.string,
  control: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default InputTextField;
