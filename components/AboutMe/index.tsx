import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { style } from "./style";
import { aboutMeData } from "./data";
import Avatar from "../../public/avatar.jpg";
import { Fragment } from "react";

const Overlay = dynamic(() => import("../../shared/Overlay"), {
  ssr: false,
});

const DownAnimation = dynamic(() => import("../../shared/Animation/DownAnimation"), {
  ssr: false,
});

const AboutMe: NextPage = () => {
  return (
    <section id="about" className="aboutMeSection" style={style.root}>
      <section style={style.intro}>
        <section style={style.mainInfo}>
          <section className="headingWrapper">
            <span className="bold" style={style.myNameIs}>
              <span className="headingNumber">01.</span> About Me{" "}
            </span>{" "}
            <hr className={"headingDivider"}></hr>
          </section>
          <section className="aboutMeWrapper">
            <section className="aboutMe">
              {aboutMeData.elements.map((item: string, index) => (
                <p key={`summary-${index}`} style={style.summary}>{item}</p>
              ))}
              <p style={style.summary}>
                Here are a few technologies I’ve been working with recently:
              </p>
              <p style={{ ...style.summary, fontSize: 14 }}>
                <ul className="custom_ul">
                  {aboutMeData.skills.map((item) => (
                      <Fragment key={`${item}`}>
                        <DownAnimation>
                          <li>{item}</li>
                        </DownAnimation>
                      </Fragment>
                  ))}
                </ul>
              </p>
            </section>
            <section style={{ height: '100%' }} className="imgWrapper">
              <div
                id="image-container"
                className="image-container"
                style={style.imageContainer}
              >
                <Overlay>
                  <Image alt="abdulhadi-jarad-image" id="imageAvatar" layout="responsive" src={Avatar} />
                </Overlay>
                <div
                  id="backImage"
                  style={style.backImage}
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
