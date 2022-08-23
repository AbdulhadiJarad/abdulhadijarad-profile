import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { style } from "./styles";
import Avatar from "../../public/avatar.jpg";
const RecentCompanies: NextPage = () => {
  return (
    <section style={style.root}>
      <section className="headingWrapper">
        <span style={style.myNameIs}>
          <span className="headingNumber">01.</span> Where I’ve Worked{" "}
        </span>{" "}
        <hr style={style.headingDivider}></hr>
      </section>
      <section style={{ color: "#ccd6f6", fontSize: 20, marginTop: 30 }}>
        Frontend Engineer <span className="companyName">@ Amescom</span>
      </section>
      <section style={{ color: "#ccd6f6", fontSize: 12 }}>
        May 2018 - Present
      </section>
      <p style={{ ...style.summary, fontSize: 14 }}>
        <ul style={{ listStyle: "none", fontSize: 18 }}>
          <li>
            Write modern, performant, maintainable code for a diverse array of
            client and internal projects
          </li>
          <li>
            Work with a variety of different languages, platforms, frameworks,
            and content management systems such as JavaScript, TypeScript,
            Gatsby, React, Craft, WordPress, Prismic, and Netlify
          </li>
          <li>
            Communicate with multi-disciplinary teams of engineers, designers,
            producers, and clients on a daily basis
          </li>
        </ul>
      </p>

      <section style={{ color: "#ccd6f6", fontSize: 20, marginTop: 30 }}>
        Frontend Engineer <span className="companyName">@ Amescom</span>
      </section>
      <section style={{ color: "#ccd6f6", fontSize: 12 }}>
        May 2018 - Present
      </section>
      <p style={{ ...style.summary, fontSize: 14 }}>
        <ul style={{ listStyle: "none", fontSize: 18 }}>
          <li>
            Write modern, performant, maintainable code for a diverse array of
            client and internal projects
          </li>
          <li>
            Work with a variety of different languages, platforms, frameworks,
            and content management systems such as JavaScript, TypeScript,
            Gatsby, React, Craft, WordPress, Prismic, and Netlify
          </li>
          <li>
            Communicate with multi-disciplinary teams of engineers, designers,
            producers, and clients on a daily basis
          </li>
        </ul>
      </p>
    </section>
  );
};

export default RecentCompanies;
