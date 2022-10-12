import styled from "styled-components";
import { Span, Para } from "./global.styled";
import { TextWrapper } from "./App.styled";

export const Highlighter = styled(Span)({
  color: "hsl(277, 64%, 61%)",
});

export const InsightWrapper = styled(TextWrapper)({
  marginBottom: "2.6rem",

  "@media(min-width: 17em)": {
    gap: "1.6rem",
    [`> p:last-child`]: {
      textTransform: "uppercase",
      fontSize: "1.75rem",
    },
  },

  "@media(min-width: 20em)": {
    marginBottom: "3rem",

    gap: "2.1rem",
    [`> p:last-child`]: {
      textTransform: "uppercase",
      fontSize: "1.9rem",
    },
  },

  "@media(min-width: 22em)": {
    marginBottom: "3.25rem",

    gap: "2.1rem",
    [`> p:last-child`]: {
      textTransform: "uppercase",
      fontSize: "2.35rem",
    },
  },

  "@media(min-width: 23em)": {
    marginBottom: "3.25rem",

    gap: "2.25rem",
    [`> p:last-child`]: {
      textTransform: "uppercase",
      fontSize: "2.4rem",
      lineHeight: 1.65,
    },
  },

  "@media(min-width: 64em)": {
    margin: "1rem auto",
    flexDirection: "row",
    gap: "0.4rem",
    [`> p:last-child`]: {
      textTransform: "uppercase",
      fontSize: "1.74rem",
      lineHeight: "1.5",
      marginRight: "0.25rem",
    },
  },
  "@media(min-width: 85em)": {
    margin: "2.75rem auto",
    flexDirection: "row",
    gap: "1.4rem",
    [`> p:last-child`]: {
      textTransform: "uppercase",
      fontSize: "2.35rem",
      lineHeight: "1.5",
      marginRight: "1rem",
    },
  },
  "@media(min-width: 90em)": {
    margin: "2.8rem auto",
    flexDirection: "row",
    gap: "2rem",
    [`> p:last-child`]: {
      textTransform: "uppercase",
      fontSize: "2.45rem",
      lineHeight: "1.5",
      marginRight: "1.75rem",
    },
  },
});

export const BodyPara = styled(Para)({
  fontFamily: '"Inter", sans-serif;',
  color: "hsla(0, 0%, 100%, 0.75)",
  "@media(min-width: 17em)": {
    fontSize: "1.13rem",
    lineHeight: "1.64",
  },

  "@media(min-width: 20em)": {
    fontSize: "1.285rem",
    lineHeight: "1.64",
  },

  "@media(min-width: 22em)": {
    fontSize: "1.45rem",
    lineHeight: "1.64",
  },

  "@media(min-width: 23em)": {
    fontSize: "1.51rem",
    lineHeight: "1.67",
  },

  "@media(min-width: 64em)": {
    fontSize: "1.07rem",
    width: "85%",
    lineHeight: "1.7",
  },

  "@media(min-width: 85em)": {
    fontSize: "1.42rem",
    width: "85%",
    lineHeight: "1.7",
  },

  "@media(min-width: 90em)": {
    fontSize: "1.51rem",
    width: "85%",
    lineHeight: "1.7",
  },
});

export const InsightPara = styled(BodyPara)({
  fontFamily: '"Inter", sans-serif',
  textAlign: "center",
  fontWeight: 700,
  "@media(min-width: 17em)": {
    fontSize: "1.9rem",
    lineHeight: "1.5",
  },

  "@media(min-width: 20em)": {
    fontSize: "1.9rem",
    lineHeight: "1.6",
    letterSpacing: "0.4px",
  },

  "@media(min-width: 22em)": {
    fontSize: "2.3rem",
    lineHeight: "1.55",
    letterSpacing: 0,
  },

  "@media(min-width: 23em)": {
    fontSize: "2.4rem",
    lineHeight: "1.55",
  },

  "@media(min-width: 64em)": {
    fontSize: "1.75rem",
    lineHeight: "1.55",
    textAlign: "left",
    marginTop: "-1rem",
  },

  "@media(min-width: 85em)": {
    fontSize: "2.35rem",
    lineHeight: "1.55",
    textAlign: "left",
    marginTop: "-1rem",
  },

  "@media(min-width: 90em)": {
    fontSize: "2.45rem",
    lineHeight: "1.55",
    textAlign: "left",
    marginTop: "-1rem",
  },
});

export const InsightSpan = styled(Span)({
  display: "block",
  textTransform: "uppercase",
  fontFamily: '"Lexend Deca", sans-serif;',
  fontWeight: 400,
  "@media(min-width: 17em)": {
    fontSize: "1rem",
  },

  "@media(min-width: 20em)": {
    fontSize: "1.1rem",
  },

  "@media(min-width: 22em)": {
    fontSize: "1.2rem",
    letterSpacing: "1px",
  },

  "@media(min-width: 64em)": {
    fontSize: "0.95rem",
    letterSpacing: "0",
  },

  "@media(min-width: 85em)": {
    fontSize: "1.24rem",
    letterSpacing: "0",
  },

  "@media(min-width: 90em)": {
    fontSize: "1.325rem",
    letterSpacing: "0",
  },
});
