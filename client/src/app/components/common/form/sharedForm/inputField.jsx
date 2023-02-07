import React, { useState } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { IconButton, Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const InputField = ({ title, control, name, type, register }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <Controller
        render={({
          field: { onChange, value = "" },
          fieldState: { error },
        }) => (
          <>
            <Input
              className="text-xl tracking-wider font-bk-rt"
              variant="outlined"
              label={title}
              type={showPassword ? "text" : type}
              onChange={onChange}
              value={value}
              id={name}
              name={name}
              color="green"
              register={register}
              icon={
                type === "password" && (
                  <IconButton
                    variant="text"
                    className="relative -top-[10px] -left-2 text-base text-green-1"
                    onClick={toggleShowPassword}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </IconButton>
                )
              }
            />
            <div className="h-6 mt-1 ">
              {error && (
                <small id={name} className={`mt-1 block text-xs text-red-800`}>
                  {error?.message}
                </small>
              )}
            </div>
          </>
        )}
        name={name}
        control={control}
      />
    </>
  );
};

InputField.propTypes = {
  title: PropTypes.string,
  control: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.object
};

export default InputField;
