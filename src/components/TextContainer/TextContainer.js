import React, { Fragment } from "react";
import { Highlighter, BodyPara } from "../../styles/TextContainer.styled";
import { Heading } from "../../styles/global.styled";

const TextContainer = (props) => {
  return (
    <Fragment>
      <Heading>
        Get <Highlighter>insights</Highlighter> that help your business grow.
      </Heading>
      <BodyPara>
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </BodyPara>
    </Fragment>
  );
};

export default TextContainer;
