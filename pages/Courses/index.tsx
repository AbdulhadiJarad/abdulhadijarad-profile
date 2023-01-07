import type { NextPage } from "next";
import { TypeAnimation } from "react-type-animation";
import { coursesData, summaryData } from "./data";
import { style } from "./style";
import IBM from '../../public/ibm.jpg'
import DataAnalystTrack from '../../public/dataAnalystTrack.jpg'
import Image from "next/image";

const Courses: NextPage = () => {
  
  return (
    <section style={style.root}>
      <section className="headingWrapper">
        <span style={style.myNameIs}>
          <span className="headingNumber">01.</span> Enrolled Courses{" "}
        </span>{" "}
        <hr className={"headingDivider"}></hr>
      </section>
      {coursesData.map((course, index) => <section style={{ width: '100%', marginTop: '20px', height: '250px', alignItems: 'center', display: 'flex', justifyContent: 'space-between', flexDirection: (index+1)%2 == 0 ? 'row-reverse': 'row', backgroundColor: 'rgb(17, 34, 64)', }}>
        <div style={{ flexBasis: '65%', padding: '20px', }}>
          <section style={{ ...style.myNameIs, fontSize: '17px' }}>
            1.{index + 1} {course.name}
          </section>
          <p style={{ marginTop: '10px' }}>
            {course.description}
          </p>
          <span style={{ color: 'rgb(100, 255, 218)', marginTop: '5px' }} className="italic">issued by <span style={{ color: '#ccd6f6' }}>{course.issuedBy}</span> </span>
        </div>
        <div style={{ width: '300px', padding: '20px' }}>
          <Image layout="responsive" src={course.image} />
        </div>
      </section>)}
    </section>
  );
};

export default Courses;
