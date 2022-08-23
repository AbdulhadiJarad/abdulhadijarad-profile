import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { style } from "./styles";
import Avatar from "../../public/tarek.jpg";
import Ubai from "../../public/ubai.jpg";
const Recommendations: NextPage = () => {
  return (
    <section style={{ ...style.root, marginTop: "100px" }}>
      <section className="headingWrapper">
        <span style={style.myNameIs}>
          <span className="headingNumber">05.</span> Recommendations{" "}
        </span>{" "}
        <hr style={style.headingDivider}></hr>
      </section>
      <div
        style={{
          background: "rgb(17, 34, 64)",
          width: "90%",
          height: "200px",
          display: "flex",
          justifyContent: "evenly",
          alignItems: "center",
          margin: "0px auto",
          marginTop: "60px",
        }}
      >
        <div style={{ flexBasis: "30%", width: "100%", textAlign: "center" }}>
          <Image className="avatar" width={100} height={100} src={Avatar} />
          <div
            style={{
              color: "#ccd6f6",
              fontSize: 14,
              marginTop: "5px",
            }}
          >
            Tarek Kharsa - <br />
            Full Stack Developer
          </div>
        </div>
        <div
          style={{
            flexBasis: "70%",
            marginRight: "20px",
            color: "rgb(136, 146, 176)",
          }}
        >
          <blockquote>
            {" "}
            We’ve joined our hands on several projects, and Abdulhadi is one of
            the best people I had as a partner. I highly recommend his expertise
            to any person looking for a senior web developer. His ability to
            tackle any problem is remarkable. Always finds his way to surprise
            us by making new creative, abstract and elegant solutions. Abdulhadi
            would become an appreciated member of any team.{" "}
          </blockquote>
        </div>
      </div>

      <div
        style={{
          background: "rgb(17, 34, 64)",
          width: "90%",
          height: "200px",
          display: "flex",
          margin: "0px auto",
          justifyContent: "evenly",
          alignItems: "center",
          marginTop: "60px",
        }}
      >
        <div style={{ flexBasis: "30%", width: "100%", textAlign: "center" }}>
          <Image className="avatar" width={100} height={100} src={Ubai} />
          <div
            style={{
              color: "#ccd6f6",
              fontSize: 14,
              marginTop: "5px",
            }}
          >
            Dr. Ubai Soundok - <br />
            Assistant Professor,
            <br />
            Damascus University
          </div>
        </div>
        <div
          style={{
            flexBasis: "70%",
            marginRight: "20px",
            color: "rgb(136, 146, 176)",
          }}
        >
          <blockquote>
            {" "}
            I have known Mr. Jarad for one year as his lecturer and supervised
            in his advanced programming course: Programming Languages. Mr. Jarad
            and his team completed the course and attained a complete mark in
            the required lab work. During his course, Mr. Jarad demonstrated a
            team player attitude with good verbal and communication skills. He
            effectively participated in his lab projects and was an excellent
            problem solver. In my opinion, he was in the top 10% performing
            students.{" "}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
