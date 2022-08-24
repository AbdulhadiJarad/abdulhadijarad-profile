import type { NextPage } from "next";
import { summaryData } from "./data";
import { style } from "./style";
const Summary: NextPage = () => {
  return (
    <section style={style.root}>
      <section style={style.intro}>
        <section style={style.mainInfo}>
          <span style={style.myNameIs}>{summaryData.welcome}</span>
          <span style={{ color: "#ccd6f6", fontWeight: "bold" }}>
            {summaryData.name}
          </span>
          <span
            style={{
              display: "block",
              color: "#8892b0",
              lineHeight: "80px",
              fontWeight: "bold",
            }}
          >
            {summaryData.job}
          </span>
        </section>
        <p style={style.summary}>{summaryData.description}</p>
        <button style={style.contactMe}>Contact Me !</button>
      </section>
    </section>
  );
};

export default Summary;
