import type { NextPage } from "next";
import { style } from "./styles";
import { recentCompaniesData } from "./data";
import dynamic from "next/dynamic";
const DownAnimation = dynamic(() => import("../../shared/Animation/DownAnimation"), {
  ssr: false,
});



const RecentCompanies = () => {
  return (
    <section id="startups" className="startups" style={style.root}>
      <section className="headingWrapper">
        <span className="bold" style={style.myNameIs}>
          <span className="headingNumber">04.</span> Startups !{" "}
        </span>{" "}
        <hr style={style.headingDivider}></hr>
      </section>
      {recentCompaniesData.map((item, index) => (
        <div key={`${item.company}-${index}`}>
          <>
            <section style={style.position}>
              {item.position}{" "}
              <span className="companyName">, {item.company}</span>
            </section>
            <section className="italic" style={style.date}>
              {item.date}
            </section>

            <DownAnimation>
              <p
                style={style.text}
              >
                <ul style={{ listStyle: "none", fontSize: 18 }}>
                  {item.responsibilities.map((element) => (
                    <li key={element}>{element}</li>
                  ))}
                </ul>
              </p>
            </DownAnimation>
          </>
        </div>
      ))}
    </section>
  );
};

export default RecentCompanies;
