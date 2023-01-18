import React from "react";
import Loading from "react-loading-components";

const Spinner = () => {
  return (
    <div className="Spinner">
      <Loading type="grid" width={100} height={100} fill="#219ebc" />
      <p>
        This application uses location information from your computer to show
        the weather data. Be sure that the permission is given.
      </p>
    </div>
  );
};

export default Spinner;
