import React from "react";
import errorImage from "../../assets/error.png";

export default function Error(error) {
  return (
    <div className="col-span-12">
      <img src={errorImage} />
      <p>{error}</p>
    </div>
  );
}
