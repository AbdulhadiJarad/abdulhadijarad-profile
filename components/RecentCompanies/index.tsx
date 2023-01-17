import type { NextPage } from "next";
import { recentCompaniesData } from "./data";
import { style } from "./styles";
import { Fragment } from "react";
import dynamic from "next/dynamic";
const DownAnimation = dynamic(() => import("../../shared/Animation/DownAnimation"), {
  ssr: false,
});

const RecentCompanies: NextPage = () => {
  return (
    <section id="experience" className="startups" style={style.root}>
      <section className="headingWrapper">
        <span className="bold" style={style.myNameIs}>
          <span className="headingNumber">02.</span> Where I’ve Worked{" "}
        </span>{" "}
        <hr style={style.headingDivider}></hr>
      </section>
      {recentCompaniesData.map((item, index) => (
        <Fragment key={item.company}>
          <>
            <section style={{ color: "#ccd6f6", fontSize: 20, marginTop: index !== 0 ? '90px' : '30px' }}>
              {item.position}{" "}
              <span className="companyName italic">@ {item.company}</span>
            </section>
            <section className="italic" style={{ color: "#ccd6f6", fontSize: 12 }}>
              {item.date}
            </section>

            {/* <DownAnimation> */}
              <p
                style={{
                  width: "90%",
                  color: "rgb(136, 146, 176)",
                  fontSize: 14,
                  display: "block",
                  margin: "0px auto",
                }}
              >
                <ul style={{ listStyle: "none", fontSize: 18 }}>
                  {item.responsibilities.map((element) => (
                    <li key={element}>{element}</li>
                  ))}
                </ul>
              </p>
            {/* </DownAnimation> */}
          </>
        </Fragment>
      ))}
    </section>
  );
};

export default RecentCompanies;
