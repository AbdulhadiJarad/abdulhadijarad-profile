import type { NextPage } from "next";
import { coursesData } from "./data";
import Overlay from '../Components/Overlay'
import { style } from "./style";
import DownAnimation from "../Components/Animation/DownAnimation";

const Courses: NextPage = () => {

  return (
    <section id="courses" className="courses" style={style.root}>
      <section className="headingWrapper">
        <span className="bold" style={style.myNameIs}>
          <span className="headingNumber">01.</span> Enrolled Courses{" "}
        </span>{" "}
        <hr className={"headingDivider"}></hr>
      </section>

      {coursesData.map((course, index) => <DownAnimation>
        <section className="coursesWrapper" style={style.coursesWrapper(index)}>
          <div className="courseDescription" style={style.wrapper}>
            <section style={style.myNameIs}>
              1.{index + 1} {course.name}
            </section>
            <p style={style.description}>
              {course.description}
            </p>
            <span style={style.owner} className="italic">issued by <span style={{ color: '#ccd6f6' }}>{course.issuedBy}</span> </span>
          </div>
          <div className="courseImgWrapper" style={{ padding: '20px' }}>
            <Overlay>
              <img className="certification" src={course.image.src} />
            </Overlay>
          </div>
        </section>
      </DownAnimation>)}
    </section>
  );
};

export default Courses;
