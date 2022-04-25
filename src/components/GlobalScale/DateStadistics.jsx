import Paragraph from "components/Common/paragraph";
import React from "react";
import TitleHthreeSub from "components/Common/title/H3subTitle";

const DateStadistics = () => {
  return (
    <>
      <article>
        <TitleHthreeSub className="stadistics" colortitle="white">
          250+
        </TitleHthreeSub>
        <Paragraph lineheight={true} colorfont="white">
          API requests per day, peaking at 13,000 requests a second.
        </Paragraph>
      </article>
      <article>
        <TitleHthreeSub className="stadistics" colortitle="white">
          90%
        </TitleHthreeSub>
        <Paragraph lineheight={true} colorfont="white">
          of U.S. adults have bought from businesses using Striped.
        </Paragraph>
      </article>
      <article>
        <TitleHthreeSub className="stadistics" colortitle="white">
          135+
        </TitleHthreeSub>
        <Paragraph lineheight={true} colorfont="white">
          currencies and paymet methods supported.
        </Paragraph>
      </article>
      <article>
        <TitleHthreeSub className="stadistics" colortitle="white">
          35+
        </TitleHthreeSub>
        <Paragraph lineheight={true} colorfont="white">
          currencies and counties methods supported.
        </Paragraph>
      </article>
    </>
  );
};

export default DateStadistics;
