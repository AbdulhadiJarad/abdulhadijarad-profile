import type { NextPage } from "next";
import Image from "next/image";
import { recommendationsData } from "./data";
import { style } from "./styles";

const Recommendations: NextPage = () => {
  return (
    <section style={{ ...style.root, marginTop: "100px" }}>
      <section className="headingWrapper">
        <span style={style.myNameIs}>
          <span className="headingNumber">05.</span> Recommendations{" "}
        </span>{" "}
        <hr style={style.headingDivider}></hr>
      </section>
      {recommendationsData.map((item) => (
        <div className="recommendationCard">
          <div className="personCard">
            <Image
              className="avatar"
              width={100}
              height={100}
              src={item.avatar}
            />
            <div
              style={{
                color: "#ccd6f6",
                fontSize: 14,
                marginTop: "5px",
              }}
            >
              <span style={{ fontSize: 17 }} className={"personName"}>
                {item.name} - <br />
              </span>
              <span style={{ opacity: 0.9, fontSize: 12 }} className={"italic"}>
                {item.position}
              </span>
            </div>
          </div>
          <div
            className="italic"
            style={{
              flexBasis: "70%",
              color: "rgb(136, 146, 176)",
            }}
          >
            <blockquote> {item.description} </blockquote>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Recommendations;
