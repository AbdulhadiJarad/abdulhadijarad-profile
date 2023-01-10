import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { style } from "./style";
import Avatar from "../../public/avatar.jpg";
import { aboutMeData } from "./data";

const AboutMe: NextPage = () => {
  return (
    <section style={style.root}>
      <section style={style.intro}>
        <section style={style.mainInfo}>
          <section className="headingWrapper">
            <span style={style.myNameIs}>
              <span className="headingNumber">01.</span> About Me{" "}
            </span>{" "}
            <hr className={"headingDivider"}></hr>
          </section>
          <section className="aboutMeWrapper">
            <section className="aboutMe">
              {aboutMeData.elements.map((item) => (
                <p style={style.summary}>{item}</p>
              ))}
              <p style={style.summary}>
                Here are a few technologies I’ve been working with recently:
              </p>
              <p style={{ ...style.summary, fontSize: 14 }}>
                <ul className="custom_ul">
                  {aboutMeData.skills.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </p>
            </section>
            <section style={{height: '100%', position: 'relative'}} className="imgWrapper">
              <div
                id="image-container"
                style={{ borderRadius: "5px", overflow: "hidden" }}
              >
                <Image id="imageAvatar" layout="responsive" src={Avatar} />
                <div
                  id="backImage"
                  style={{
                    width: "270px",
                    height: "270px",
                    position: "absolute",
                    right: -25,
                    top: 35,
                    border: "solid #ccd6f6 2px",
                  }}
                ></div>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default AboutMe;
