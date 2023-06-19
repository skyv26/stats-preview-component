import styled from "styled-components";
import { Wrapper } from "./global.styled";

export const Container = styled(Wrapper)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
  backgroundColor: "hsl(244, 38%, 16%)",
  "@media(min-width: 17em)": {
    margin: "6.6rem auto",
    borderRadius: "5px",
    gap: "2.6rem",
    width: "88%",
  },

  "@media(min-width: 20em)": {
    margin: "7.6rem auto",
    borderRadius: "5px",
    gap: "3.25rem",
    width: "88%",
  },

  "@media(min-width: 22em)": {
    margin: "8.4rem auto",
    borderRadius: "7px",
    gap: "3.75rem",
    width: "87%",
  },

  "@media(min-width: 23em)": {
    margin: "8.75rem auto",
    borderRadius: "7px",
    gap: "3.75rem",
    width: "87%",
  },

  "@media(min-width: 25em)": {
    margin: "8.75rem auto",
    borderRadius: "7px",
    gap: "3.75rem",
    width: "79%",
  },

  "@media(min-width: 25.8em)": {
    margin: "8.75rem auto",
    borderRadius: "7px",
    gap: "3.75rem",
    width: "79%",
  },

  "@media(min-width: 26em)": {
    margin: "8.75rem auto",
    borderRadius: "7px",
    gap: "3.75rem",
    width: "77%",
  },

  "@media(min-width: 64em)": {
    margin: "12.6rem auto",
    gap: "0",
    width: "77%",
    flexDirection: "row-reverse",
  },

  "@media(min-width: 85em)": {
    margin: "16.7rem auto",
    width: "77.25%",
  },

  "@media(min-width: 90em)": {
    margin: "17.75rem auto",
    width: "77%",
  },
});

export const TextWrapper = styled(Wrapper)({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  width: "80%",
  margin: "auto",
  "@media (min-width: 17em)": {
    gap: "1.1rem",
  },
  "@media (min-width: 20em)": {
    gap: "1.48rem",
  },

  "@media (min-width: 23em)": {
    gap: "1.6rem",
  },

  "@media (min-width: 64em)": {
    gap: "1.6rem",
    textAlign: "left",
    width: "74.5%",
    margin: "0 auto",
  },

  "@media (min-width: 85em)": {
    gap: "2.3rem",
  },

  "@media (min-width: 90em)": {
    gap: "2.3rem",
    width: "78%",
  },
});
