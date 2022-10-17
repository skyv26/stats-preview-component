import React from "react";
import { InsightPara, InsightSpan } from "../../styles/TextContainer.styled";

const Stats = (props) => {
  return (
    <>
      <InsightPara>
        10k+
        <InsightSpan>companies</InsightSpan>
      </InsightPara>

      <InsightPara>
        314
        <InsightSpan>templates</InsightSpan>
      </InsightPara>

      <InsightPara>
        12m+
        <InsightSpan>queries</InsightSpan>
      </InsightPara>
    </>
  );
};

export default Stats;
