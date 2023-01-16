import type { NextPage } from "next";
import { coursesData } from "./data";
import Overlay from '../Components/Overlay'
import { style } from "./style";
import { motion, useScroll, useSpring, Variants } from "framer-motion";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 10
  },
  onscreen: {
    y: -20,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.9
    }
  }
};


function Card({ children }: Props) {

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


const Courses: NextPage = () => {

  return (
    <section id="courses" className="courses" style={style.root}>
      <section className="headingWrapper">
        <span className="bold" style={style.myNameIs}>
          <span className="headingNumber">01.</span> Enrolled Courses{" "}
        </span>{" "}
        <hr className={"headingDivider"}></hr>
      </section>

      {coursesData.map((course, index) => <Card>
        <section className="coursesWrapper" style={{ width: '100%', marginTop: index === 0 ? '50px' : '20px', flexWrap: 'wrap', flexDirection: (index + 1) % 2 == 0 ? 'row-reverse' : 'row', height: '100%', alignItems: 'center', backgroundColor: 'rgb(17, 34, 64)', borderRadius: '12px' }}>
          <div className="courseDescription" style={{ padding: '20px', }}>
            <section style={{ ...style.myNameIs, fontSize: '17px' }}>
              1.{index + 1} {course.name}
            </section>
            <p style={{ marginTop: '10px' }}>
              {course.description}
            </p>
            <span style={{ color: 'rgb(100, 255, 218)', marginTop: '5px' }} className="italic">issued by <span style={{ color: '#ccd6f6' }}>{course.issuedBy}</span> </span>
          </div>
          <div className="courseImgWrapper" style={{ padding: '20px' }}>
            <Overlay>
              <img className="certification" src={course.image.src} />
            </Overlay>
          </div>
        </section>
      </Card>)}
    </section>
  );
};

export default Courses;
