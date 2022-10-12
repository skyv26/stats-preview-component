import styled from "styled-components";
import { Image, Wrapper } from "./global.styled";

export const Img = styled(Image)({
  width: "100%",
});

export const ImageWrapper = styled(Wrapper)({
  position: "relative",

  ".desktop": {
    display: "none",
  },

  "@media(min-width: 64em)": {
    ".desktop": {
      display: "block",
    },
    ".mobile": {
      display: "none",
    },
  },
});

export const Overlay = styled(Wrapper)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  backgroundColor: "hsla(277, 64%, 65%, 0.6)",
});
