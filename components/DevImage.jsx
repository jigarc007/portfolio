import React from "react";
import Image from "next/image";
const DevImage = ({ containerStyle, imgSrc }) => {
  return (
    <div className={`${containerStyle}`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
};

export default DevImage;
