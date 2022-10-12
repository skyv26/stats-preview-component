import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  display: inline-block;
`;

export const Fig = styled.figure({
  width: "100%",
  zIndex: 10,
});

export const Wrapper = styled.div``;

export const Display = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 17em) {
    gap: 2.6rem;
  }

  @media (min-width: 20em) {
    gap: 3.25rem;
  }

  @media (min-width: 22em) {
    gap: 3.75rem;
  }

  @media (min-width: 23em) {
    gap: 3.75rem;
  }

  @media (min-width: 25em) {
    gap: 3.75rem;
  }

  @media (min-width: 25.8em) {
    gap: 3.75rem;
  }

  @media (min-width: 26em) {
    gap: 3.75rem;
  }

  @media (min-width: 64em) {
    margin: 0 auto;
    borderradius: 0;
    gap: 4.7rem;
    width: 72%;
    padding: 5rem 0;
    padding-bottom: 0;
    flexdirection: row-reverse;
  }
  @media (min-width: 85em) {
    gap: 4.7rem;
    width: 54.25%;
    padding: 6.75rem 0;
    padding-bottom: 0;
  }
  @media (min-width: 90em) {
    gap: 4.7rem;
    width: 50%;
    padding: 7rem 0.2rem;
    padding-bottom: 0;
  }
`;

export const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  color: hsl(0, 0%, 100%);

  @media (min-width: 17em) {
    font-size: 2.12rem;
    line-height: 1.13;
  }

  @media (min-width: 20em) {
    font-size: 2.41rem;
    line-height: 1.13;
  }

  @media (min-width: 22em) {
    font-size: 2.68rem;
    line-height: 1.15;
  }

  @media (min-width: 23em) {
    font-size: 2.8rem;
    line-height: 1.15;
  }

  @media (min-width: 64em) {
    font-size: 2.57rem;
    line-height: 1.25;
    margin: 0;
  }

  @media (min-width: 85em) {
    font-size: 3.42rem;
    line-height: 1.25;
    margin: 0;
  }

  @media (min-width: 90em) {
    font-size: 3.64rem;
    line-height: 1.25;
    margin: 0;
  }
`;

export const Para = styled.p``;

export const Span = styled.span``;
