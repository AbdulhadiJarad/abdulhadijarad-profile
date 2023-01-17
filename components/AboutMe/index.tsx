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
              <p className="summaryText" style={style.summary}>
                <ul  >

                I am a JavaScript, TypeScript and dApp developer with some limited experience in Blockchain, Machine Learning and information retrieval techniques.
                Writing well-documented code, that is readable, reusable, scalable, and efficient, is at the top of my priority list.
                <li>
                    I have used react as my primary frontend library and frameworks <span style={{color: 'rgb(100, 255, 218)', opacity: '0.7'}}>  (NextJS) </span> to enhanse the SEO. To create responsive designs.
                    I prefer wearing a well-coded style from styling libraries such as Material UI & ant design.
                </li>

                <li>
                    For building rest API and managing DB, I have used express library in NodeJS.
                    I have developed <span style={{ color: 'rgb(100, 255, 218)', opacity: '0.7' }}>  MERN stack projects </span>   from requirement gathering to testing and release.
                    I have used testing tools such as jest  <span style={{ color: 'rgb(100, 255, 218)', opacity: '0.7' }}>  (unit test)</span> with 70% coverage. <span style={{ color: 'rgb(100, 255, 218)', opacity: '0.7' }}>  cypress </span>  (end-to-end tests) to extensively test my code.
                </li>

                <li>
                    As a software engineer, I managed teams in some projects as a 
                    <span style={{ color: 'rgb(100, 255, 218)', opacity: '0.7' }}>  scrum master </span> and technical leader. Insure that the quality of the team&#39;s code is as much as possible with the deadline.
                    Graduated from Damascus university this year with a good grade.
                </li>
                  <li> Here are a few technologies I have been working with recently:</li>
                </ul>
                </p>
              <p style={style.summary}>
               
              </p>
              <p style={{ ...style.summary, fontSize: 14 }}>
                  <DownAnimation>
                <ul className="custom_ul">
                  {aboutMeData.skills.map((item) => (
                      <Fragment key={`${item}`}>
                          <li>{item}</li>
                      </Fragment>
                  ))}
                </ul>
                  </DownAnimation>
              </p>
            </section>
            <section style={{ height: '100%' }} className="imgWrapper">
              <div
                id="image-container"
                className="image-container"
                style={style.imageContainer}
              >
                <Overlay>
                  <img style={{width: '280px', height: '300px'}} alt="abdulhadi-jarad-image" id="imageAvatar"  src={'avatar.jpg'} />
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
