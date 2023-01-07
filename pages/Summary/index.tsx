import type { NextPage } from "next";
import { TypeAnimation } from "react-type-animation";
import { summaryData } from "./data";
import { style } from "./style";
const Summary: NextPage = () => {
  
  return (
    <section style={style.root}>
      <section style={style.intro}>
        <section style={style.mainInfo}>
          <span style={style.myNameIs}>{summaryData.welcome}</span>
          <span style={{ color: "#ccd6f6", fontWeight: "bold" }}>
            
            <TypeAnimation
              sequence={[
                1000, // Waits 1s
                `${summaryData.name }`, // Types 'One'
                2000, // Waits 1s
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="div"
              cursor={true}
              repeat={2}
              // style={{ fontSize: '2em' }}
            />
          </span>
         
          <span
            style={{
              display: "block",
              color: "#8892b0",
              lineHeight: "80px",
              fontWeight: "bold",
            }}
          >
            
            <TypeAnimation
              sequence={[
                2000, // Waits 1s
                `${summaryData.job}`, // Types 'One'
                2000, // Waits 1s
                'I build customized web projects',
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            // style={{ fontSize: '2em' }}
            />
          </span>
        </section>
        <p className="italic" style={style.summary}>{summaryData.description}</p>
        <button style={style.contactMe}>Contact Me !</button>
      </section>
    </section>
  );
};

export default Summary;
