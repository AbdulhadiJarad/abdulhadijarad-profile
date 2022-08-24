import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { style } from "./style";
import Avatar from "../../public/avatar.jpg";
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
              <p style={style.summary}>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
              </p>
              <p style={style.summary}>
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a vriety of clients I also recently launched a
                course that covers everything you need to build a web app with
                the Spotify API using Node & React.
              </p>
              <p style={style.summary}>
                Here are a few technologies I’ve been working with recently:
              </p>
              <p style={{ ...style.summary, fontSize: 14 }}>
                <ul className="custom_ul">
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>WordPress</li>
                  <li>Eleventy</li>
                </ul>
              </p>
            </section>
            <section className="imgWrapper">
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
