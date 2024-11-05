import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
<<<<<<< HEAD
        style={{ transform: "translateY(-120px) translateX(10px)" }}
=======
        style={{ transform: "translateY(-120px) translateX(20px)" }}
>>>>>>> d8e54c8bce4f6d5146ff10d860f3a7f9fad7fff4
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;

