import React from "react";

const SpinnerLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen align-super">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SpinnerLoader;
