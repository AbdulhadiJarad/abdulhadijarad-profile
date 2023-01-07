import type { NextPage } from "next";
import { style } from "./styles";
import { recentCompaniesData } from "./data";
import Image from "next/image";
import MindMover from "../../public/mindmovers.jpg";

const Projects: NextPage = () => {
  return (
    <section style={style.root}>
      <section className="headingWrapper">
        <span style={style.myNameIs}>
          <span className="headingNumber">01.</span> Some Things I’ve Built {" "}
        </span>{" "}
        <hr style={style.headingDivider}></hr>
      </section>
      <section style={{ display: 'flex', alignItems: 'center', marginTop: '60px' }}>
        <div style={{ position: 'relative', flexBasis: '70%', }}>
          <Image src={MindMover} />
        </div>
        <div style={{ textAlign: 'right', flexBasis: '30%', position: 'relative', height: '100%' }}>
          <section style={{ width: '500px', position: 'absolute', height: 'fit-content', bottom: 0, top: 0, left: -120, marginBottom: 'auto', marginTop: 'auto', }}>
            <p style={{ textAlign: 'right', color: '#64ffda', fontWeight: '400' }}>Featured Project</p>
            <p style={{ textAlign: 'right', color: '#ccd6f6', fontWeight: '600', fontSize: 'clamp(24px, 5vw, 28px)' }}>Mind Movers</p>
            <section style={{ backgroundColor: '#112240', color: '#a8b2d1m', fontSize: '15px', padding: '20px', zIndex: 99, }}>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
            </section>
            <section style={{ display: 'flex', marginTop: '10px', justifyContent: 'flex-end', gap: '40px' }}>
              <p>NextJs</p>
              <p>GraphQl</p>
              <p>NextJs</p>
              <p>GraphQl</p>
            </section>
          </section>
        </div>
      </section>
      {/*  */}
      <section style={{ display: 'flex', alignItems: 'center', marginTop: '60px' }}>
       
        <div style={{ textAlign: 'left', flexBasis: '30%', position: 'relative', height: '100%' }}>
          <section style={{ width: '500px', zIndex: 99, position: 'absolute', height: 'fit-content', bottom: 0, top: 0,  marginBottom: 'auto', marginTop: 'auto', }}>
            <p style={{ textAlign: 'left', color: '#64ffda', fontWeight: '400' }}>Featured Project</p>
            <p style={{ textAlign: 'left', color: '#ccd6f6', fontWeight: '600', fontSize: 'clamp(24px, 5vw, 28px)' }}>Mind Movers</p>
            <section style={{ backgroundColor: '#112240', color: '#a8b2d1m', fontSize: '15px', padding: '20px', zIndex: 99, }}>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
            </section>
            <section style={{ display: 'flex', marginTop: '10px', justifyContent: 'flex-start', gap: '40px' }}>
              <p>NextJs</p>
              <p>GraphQl</p>
              <p>NextJs</p>
              <p>GraphQl</p>
            </section>
          </section>
        </div>
        <div style={{ position: 'relative', flexBasis: '70%', right: -50, }}>
          <Image src={MindMover} />
        </div>
      </section>
    </section>
  );
};

export default Projects;
