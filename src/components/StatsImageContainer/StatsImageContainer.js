import React from "react";
import { ImageWrapper, Overlay } from "../../styles/StatsImage.styled";
import { Fig } from "../../styles/global.styled";
import { Img } from "../../styles/StatsImage.styled";
import MobileImage from "../../assests/image-header-mobile.jpg";
import DesktopImage from "../../assests/image-header-desktop.jpg";

const StatsImageContainer = (props) => {
  return (
    <ImageWrapper>
      <Fig>
        <Img
          src={MobileImage}
          className="mobile"
          alt="stats preview main image"
        />
        <Img
          src={DesktopImage}
          className="desktop"
          alt="stats preview main image"
        />
      </Fig>
      <Overlay />
    </ImageWrapper>
  );
};

export default StatsImageContainer;
