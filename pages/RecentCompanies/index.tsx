import type { NextPage } from "next";
import { style } from "./styles";
import { recentCompaniesData } from "./data";
import { motion, useScroll, useSpring, Variants } from "framer-motion";

const cardVariantsSettings: Variants = {
  offscreen: {
    y: 50
  },
  onscreen: {
    y: 0,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.9
    }
  }
};

function Card({ cardVariants, children }: Props) {

  return (
    <motion.div
      // className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
}

const RecentCompanies: NextPage = () => {
  return (
    <section id="experience" className="startups" style={style.root}>
      <section className="headingWrapper">
        <span className="bold" style={style.myNameIs}>
          <span className="headingNumber">01.</span> Where I’ve Worked{" "}
        </span>{" "}
        <hr style={style.headingDivider}></hr>
      </section>
      {recentCompaniesData.map((item) => (
        <div>
          <>
            <section style={{ color: "#ccd6f6", fontSize: 20, marginTop: 30 }}>
              {item.position}{" "}
              <span className="companyName italic">@ {item.company}</span>
            </section>
            <section className="italic" style={{ color: "#ccd6f6", fontSize: 12 }}>
              {item.date}
            </section>

            <Card cardVariants={cardVariantsSettings}>
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
            </Card>
          </>
        </div>
      ))}
    </section>
  );
};

export default RecentCompanies;
