import type { NextPage } from "next";
import { coursesData } from "./data";
import Overlay from '../Components/Overlay'
import { style } from "./style";

const Courses: NextPage = () => {
  
  return (
    <section className="courses" style={style.root}>
      <section className="headingWrapper">
        <span style={style.myNameIs}>
          <span className="headingNumber">01.</span> Enrolled Courses{" "}
        </span>{" "}
        <hr className={"headingDivider"}></hr>
      </section>
  
      {coursesData.map((course, index) => <section className="coursesWrapper" style={{ width: '100%', flexWrap: 'wrap', flexDirection: (index + 1) % 2 == 0 ? 'row-reverse' : 'row', height: '100%', marginTop: '20px',  alignItems: 'center', backgroundColor: 'rgb(17, 34, 64)', }}>
        <div className="courseDescription" style={{ padding: '20px', }}>
          <section style={{ ...style.myNameIs, fontSize: '17px' }}>
            1.{index + 1} {course.name}
          </section>
          <p style={{ marginTop: '10px' }}>
            {course.description}
          </p>
          <span style={{ color: 'rgb(100, 255, 218)', marginTop: '5px' }} className="italic">issued by <span style={{ color: '#ccd6f6' }}>{course.issuedBy}</span> </span>
        </div>
        <div className="courseImgWrapper" style={{  padding: '20px' }}>
          <Overlay>
            <img className="certification" src={course.image.src} />
          </Overlay>
        </div>
      </section>)}
    </section>
  );
};

export default Courses;
