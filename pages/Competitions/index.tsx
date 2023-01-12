import type { NextPage } from "next";
import { style } from "./styles";
import { recentCompaniesData } from "./data";
const RecentCompanies: NextPage = () => {
  return (
    <section className="startups" style={style.root}>
      <section className="headingWrapper">
        <span style={style.myNameIs}>
          <span className="headingNumber">01.</span> Startups !{" "}
        </span>{" "}
        <hr style={style.headingDivider}></hr>
      </section>
      {recentCompaniesData.map((item) => (
        <div>
          <>
            <section style={{ color: "#ccd6f6", fontSize: 20, marginTop: 30 }}>
              {item.position}{" "}
              <span className="companyName">, {item.company}</span>
            </section>
            <section style={{ color: "#ccd6f6", fontSize: 12 }}>
              {item.date}
            </section>

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
                  <li>{element}</li>
                ))}
              </ul>
            </p>
          </>
        </div>
      ))}
    </section>
  );
};

export default RecentCompanies;
